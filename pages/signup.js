import React, { useState } from 'react';
import Page from '../components/Page';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import signupAction from '../store/actions/userActions/signupAction';

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
		if (name.length < 4 || email.length < 3 || password.length < 4) {
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
					<div className='login-button' onClick={registerUser}>
						<p>Register</p>
					</div>
					<p>
						Have an account?{' '}
						<Link href='/login'>
							<a style={{ color: 'dodgerblue', cursor: 'pointer' }}>Login</a>
						</Link>
					</p>
					{validationError && (
						<p style={{ color: 'tomato' }}>{validationErrorText}</p>
					)}
					<p>{signupSelector.error}</p>
				</div>
			</div>
		</Page>
	);
};

export default signup;
