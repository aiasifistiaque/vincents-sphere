import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import Link from 'next/link';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import Router, { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import userLoginAction from '../store/actions/userActions/userLoginAction';
import ButtonLoading from '../components/ButtonLoading';
import AgreeTerms from '../components/AgreeTerms';
import { ErrorText } from '../components';
import validateEmail from '../functions/validateEmail';

const login = () => {
	const router = useRouter();
	const status = router.query.page;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validationError, setValidationError] = useState(false);
	const [validationErrorText, setValidationErrorText] = useState('');
	const [loading, setLoading] = useState(false);

	const { isLoggedIn } = useIsLoggedIn();

	useEffect(() => {
		if (isLoggedIn) {
			if (router.query.page == 'cart') {
				Router.replace('/cart');
			} else if ((router.query.page = 'product')) {
				Router.replace(`/product/${router.query.id}`);
			}
			Router.replace('/');
		}
	}, [isLoggedIn]);

	const dispatch = useDispatch();
	const tokenSelector = useSelector(state => state.token);

	const handleKeyPress = e => {
		if (e.code === 'Enter') {
			loginButtonPressed();
		}
	};

	const loginButtonPressed = () => {
		const emailValid = validateEmail(email);
		setValidationError(false);
		if (email.length < 1) {
			setValidationError(true);
			setValidationErrorText('Email is Required');
		} else if (!emailValid) {
			setValidationError(true);
			setValidationErrorText('Email is incorrectly formatted');
		} else if (password.length < 1) {
			setValidationError(true);
			setValidationErrorText('Passowrd is required');
		} else {
			dispatch(
				userLoginAction(
					email,
					password,
					router.query.page == 'cart'
						? '/cart'
						: router.query.page == 'product'
						? `/product/${router.query.id}`
						: '/'
				)
			);
			setLoading(tokenSelector.loading);
		}
	};

	return (
		<Page title='login'>
			<div className='login-page'>
				<div className='login-form'>
					<h3>Login</h3>
					<label>Email</label>
					<input
						type='text'
						placeholder='email *'
						value={email}
						onChange={e => setEmail(e.target.value)}
						onKeyPress={e => handleKeyPress(e)}
					/>
					<label>Password</label>
					<input
						type='password'
						placeholder='password *'
						value={password}
						onChange={e => setPassword(e.target.value)}
						onKeyPress={e => handleKeyPress(e)}
					/>

					<a
						href='/forgotpassword'
						className='forgot-password'
						style={{ textDecorationLine: 'none' }}>
						Forgot Password?
					</a>

					<div className='login-button' onClick={loginButtonPressed}>
						{tokenSelector.loading ? <ButtonLoading /> : <p>Login</p>}
					</div>
					{validationError ? (
						<ErrorText>{validationErrorText}</ErrorText>
					) : (
						tokenSelector.error && <ErrorText>{tokenSelector.error}</ErrorText>
					)}
					<AgreeTerms />
					<br />

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
