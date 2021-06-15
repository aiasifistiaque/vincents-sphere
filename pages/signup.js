import React, { useState } from 'react';
import Page from '../components/Page';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import signupAction from '../store/actions/userActions/signupAction';
import { ErrorText, CustomButton } from '../components';
import AgreeTerms from '../components/AgreeTerms';

const signup = () => {
	const signupSelector = useSelector(state => state.signup);
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [validationError, setValidationError] = useState(false);
	const [validationErrorText, setValidationErrorText] = useState('');

	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	const handleKeyPress = e => {
		console.log(e);
		if (e.code === 'Enter') {
			registerUser();
		}
	};

	const registerUser = () => {
		setValidationError(false);

		const emailValidate = validateEmail(email);

		if (name.length < 1) {
			setValidationErrorText('Name is Required');
			setValidationError(true);
		} else if (name.length < 4) {
			setValidationErrorText('Name must be 4 characters long');
			setValidationError(true);
		} else if (email.length < 1) {
			setValidationErrorText('Email is Required');
			setValidationError(true);
		} else if (!emailValidate) {
			setValidationError(true);
			setValidationErrorText('Email is incorrectly formatted');
		} else if (password.length < 1) {
			setValidationErrorText('Password is Required');
			setValidationError(true);
		} else if (password.length < 1) {
			setValidationError(true);
			setValidationErrorText('Passwords is required');
			return;
		} else if (password.length < 7) {
			setValidationError(true);
			setValidationErrorText('Passwords must be 6 characters long');
			return;
		} else if (password != confirm) {
			setValidationError(true);
			setValidationErrorText('Passwords do not match');
			return;
		} else if (name.length < 4 || email.length < 3 || password.length < 4) {
			setValidationError(true);
			setValidationErrorText('Incomplete Details');
		} else {
			dispatch(signupAction(name, email, password));
		}
	};

	return (
		<Page>
			<div className='login-page'>
				<div className='login-form'>
					<h3>Register</h3>
					<label>Name</label>
					<input
						type='text'
						placeholder='name'
						value={name}
						onChange={e => setName(e.target.value)}
						onKeyPress={e => handleKeyPress(e)}
					/>
					<label>Email</label>
					<input
						type='text'
						placeholder='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						onKeyPress={e => handleKeyPress(e)}
					/>
					<label>Password</label>
					<input
						type='password'
						placeholder='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						onKeyPress={e => handleKeyPress(e)}
					/>
					<label>Confirm Password</label>

					<input
						type='password'
						placeholder='confirm'
						value={confirm}
						onChange={e => setConfirm(e.target.value)}
						onKeyPress={e => handleKeyPress(e)}
					/>

					{signupSelector.loading ? (
						<CustomButton>loading...</CustomButton>
					) : (
						<div className='login-button' onClick={registerUser}>
							<p>Register</p>
						</div>
					)}
					{validationError ? (
						<ErrorText>{validationErrorText}</ErrorText>
					) : (
						signupSelector.error && (
							<ErrorText>{signupSelector.error}</ErrorText>
						)
					)}
					<AgreeTerms />
					<br />

					<p>
						Already Have an account?{' '}
						<Link href='/login'>
							<a style={{ color: 'dodgerblue', cursor: 'pointer' }}>Login</a>
						</Link>
					</p>
				</div>
			</div>
		</Page>
	);
};

export default signup;
