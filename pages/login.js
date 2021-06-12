import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import Link from 'next/link';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import userLoginAction from '../store/actions/userActions/userLoginAction';
import ButtonLoading from '../components/ButtonLoading';

const login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validationError, setValidationError] = useState(false);
	const [validationErrorText, setValidationErrorText] = useState('');
	const [loading, setLoading] = useState(false);

	const { isLoggedIn } = useIsLoggedIn();

	useEffect(() => {
		if (isLoggedIn) {
			Router.replace('/');
		}
	}, [isLoggedIn]);

	const dispatch = useDispatch();
	const tokenSelector = useSelector(state => state.token);

	const loginButtonPressed = () => {
		setValidationError(false);
		if (email.length < 5) {
			setValidationError(true);
			setValidationErrorText('email is not valid');
		} else if (password.length < 1) {
			setValidationError(true);
			setValidationErrorText('password is required');
		} else {
			dispatch(userLoginAction(email, password, '/'));
			setLoading(tokenSelector.loading);
		}
	};

	return (
		<Page>
			<div className='login-page'>
				<div className='login-form'>
					<h3>Login</h3>
					<label>Email</label>
					<input
						type='text'
						placeholder='email *'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input
						type='password'
						placeholder='password *'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<div className='login-button' onClick={loginButtonPressed}>
						{tokenSelector.loading ? <ButtonLoading /> : <p>Login</p>}
					</div>
					{validationError ? (
						<p style={{ color: 'crimson' }}>{validationErrorText}</p>
					) : (
						<p style={{ color: 'crimson' }}>
							{tokenSelector.error && 'Email/Password invalid'}
						</p>
					)}

					<p>
						New Customer?{' '}
						<Link href='/signup'>
							<a style={{ color: 'dodgerblue', cursor: 'pointer' }}>Register</a>
						</Link>
					</p>
				</div>
			</div>
		</Page>
	);
};

export default login;
