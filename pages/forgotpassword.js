import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import { LongButton, TextButton, SuccessText } from '../components';
import axios from 'axios';
import { api } from '../constants';
import { useRouter } from 'next/router';
import validateEmail from '../functions/validateEmail';
import ResetPassword from '../components/reset/ResetPassword';
import VerifyOtp from '../components/reset/VerifyOtp';
import VerifyEmail from '../components/reset/VerifyEmail';

const editprofile = () => {
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const [text, setText] = useState('');
	const [error, setError] = useState(false);
	const [errorText, setErrorText] = useState('');
	const [loading, setLoading] = useState(false);

	const [verifiedEmail, setVerifiedEmail] = useState('');
	const [verifiedUser, setVerifiedUser] = useState({});

	//const [otp, setOtp] = useState('');
	const [otp, setOtp] = useState('');
	const [otpError, setOtpError] = useState(false);
	const [otpErrorText, setOtpErrorText] = useState('');
	const [otpSuccess, setOtpSuccess] = useState(false);
	const [otpSuccessText, setOtpSuccessText] = useState('');
	const [otpLoading, setOtpLoading] = useState(false);

	//

	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const [passwordSuccess, setPasswordSuccess] = useState(false);
	const [passwordSuccessText, setPasswordSuccessText] = useState(false);
	const [passwordLoading, setPasswordLoading] = useState(false);
	const [passwordErrorText, setPasswordErrorText] = useState('');

	//final step

	const sendOtp = () => {
		setSuccess(false);
		setError(false);
		const valid = validateEmail(email);

		if (email.length < 1) {
			setError(true);
			setErrorText('Email is required');
			return;
		} else if (!valid) {
			setError(true);
			setErrorText('Email is not formatted correctly');
			return;
		}

		if (loading) return;
		else {
			setSuccess(false);
			setError(false);
			axios
				.post(api.sendOtp, { email: email }, api.config)
				.then(res => {
					setSuccess(true);
					setVerifiedEmail(res.data.email);
					setText('OTP has been sent to your email');
				})
				.catch(e => {
					console.log(e.response.data);
					setError(true);
					setErrorText(e.response.data);
				});
		}
	};

	const verifyOtp = () => {
		setOtpSuccess(false);
		setOtpError(false);

		if (verifiedEmail.length < 1) {
			setOtpError(true);
			setOtpErrorText('Error');
		}

		if (otpLoading) return;
		else {
			setOtpLoading(true);
			setOtpSuccess(false);
			setOtpError(false);
			axios
				.post(api.verifyOtp, { email: verifiedEmail, otp: otp }, api.config)
				.then(res => {
					if (res.data.status == 'success') {
						setOtpSuccess(true);
						setVerifiedUser(res.data.user);
						setOtpLoading(false);

						//setText('OTP has been sent to your email');
					}
				})
				.catch(e => {
					console.log(e.response);
					setOtpError(true);
					setOtpErrorText(e.response.data);
					setOtpLoading(false);
				});
		}
	};

	const changePass = () => {
		if (password.length < 1) {
			setPasswordError(true);
			setPasswordErrorText('Password is required');
			return;
		} else if (password.length < 6) {
			setPasswordError(true);
			setPasswordErrorText('Password should atleast be six characters');
		} else if (passwordLoading) {
			return;
		} else {
			setPasswordLoading(true);
			setPasswordSuccess(false);
			setPasswordError(false);
			axios
				.post(
					api.resetPassword,
					{ email: verifiedEmail, otp: otp, password: password },
					api.config
				)
				.then(res => {
					console.log(res.data);
					if (res.data.status == 'success') {
						setPasswordSuccess(true);
						setPasswordSuccessText('Password Changed Successfully');
						setPasswordLoading(false);

						//setText('OTP has been sent to your email');
					}
				})
				.catch(e => {
					console.log(e.response);
					setPasswordError(true);
					setPasswordErrorText(e.response.data);
					setPasswordLoading(false);
				});
		}
	};

	return (
		<Page>
			<div className='reset-password'>
				<VerifyEmail
					email={email}
					setEmail={e => setEmail(e)}
					success={success}
					error={error}
					text={text}
					errorText={errorText}
					sendOtp={sendOtp}
					otpSuccess={otpSuccess}
				/>

				<br />

				{success && !otpSuccess && (
					<VerifyOtp
						otp={otp}
						setOtp={e => setOtp(e)}
						success={otpSuccess}
						error={otpError}
						text={otpSuccessText}
						errorText={otpErrorText}
						loading={otpLoading}
						verifyOtp={verifyOtp}
					/>
				)}

				{otpSuccess && !passwordSuccess && (
					<ResetPassword
						user={verifiedUser}
						password={password}
						setPassword={e => setPassword(e)}
						error={passwordError}
						errorText={passwordErrorText}
						loading={passwordLoading}
						success={passwordSuccess}
						changePass={changePass}
					/>
				)}

				{passwordSuccess && (
					<div className='ppp'>
						<SuccessText>Password Changed Successfully</SuccessText>
						<TextButton onClick={() => router.replace('/login')}>
							login to your account
						</TextButton>
					</div>
				)}
			</div>
		</Page>
	);
};

export default editprofile;
