import React from 'react';
import { TextButton, ErrorText, LongButton, SuccessText } from '..';

const VerifyEmail = ({
	email,
	setEmail,
	success,
	error,
	text,
	errorText,
	sendOtp,
	otpSuccess,
}) => {
	return (
		<div>
			<div className='edit-reset-input'>
				<div>
					<h2>Reset Password</h2>
					<p>An One Time Password will be sent to your email address</p>
				</div>

				<br />
				<label>Email</label>
				<input
					type='text'
					placeholder='Email address'
					value={email}
					onChange={e => setEmail(e.target.value)}
					disabled={success && true}
				/>
			</div>

			{!otpSuccess && success && <SuccessText>{text}</SuccessText>}
			{error && <ErrorText style={{ color: 'crimson' }}>{errorText}</ErrorText>}

			{!otpSuccess && (
				<LongButton onClick={sendOtp}>
					{success ? 'Resend OTP' : 'Send OTP'}
				</LongButton>
			)}
		</div>
	);
};

export default VerifyEmail;
