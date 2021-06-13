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

	const registerUser = () => {
		setValidationError(false);

		if (password != confirm) {
			setValidationError(true);
			setValidationErrorText('Passwords do not match');
			return;
		} else if (name.length < 4 || email.length < 3 || password.length < 4) {
			setValidationError(true);
			setValidationErrorText('there was an error');
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
					/>
					<label>Email</label>
					<input
						type='text'
						placeholder='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input
						type='password'
						placeholder='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<label>Confirm Password</label>

					<input
						type='password'
						placeholder='confirm'
						value={confirm}
						onChange={e => setConfirm(e.target.value)}
					/>

					{signupSelector.loading ? (
						<CustomButton>loading...</CustomButton>
					) : (
						<div className='login-button' onClick={registerUser}>
							<p>Register</p>
						</div>
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
				{validationError ? (
					<ErrorText>{validationErrorText}</ErrorText>
				) : (
					<ErrorText>{signupSelector.error}</ErrorText>
				)}
			</div>
		</Page>
	);
};

export default signup;
