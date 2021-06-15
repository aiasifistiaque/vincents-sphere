import React from 'react';
import { LongButton, TextButton, ErrorText, SuccessText } from '..';
import { useRouter } from 'next/router';

const ResetPassword = ({
	user,
	password,
	setPassword,
	error,
	errorText,
	loading,
	changePass,
	success,
}) => {
	const router = useRouter();
	return (
		<div>
			<div className='edit-reset-input'>
				<label>Enter New Password</label>
				<input
					type='password'
					placeholder='Enter New Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</div>

			{error && <ErrorText>{errorText}</ErrorText>}

			{!success && !loading ? (
				<LongButton onClick={changePass}>
					{loading ? 'loading...' : 'Confirm'}
				</LongButton>
			) : (
				<div>
					<SuccessText>Password Changed Successfully</SuccessText>
					<TextButton onClick={() => router.replace('/login')}>
						login to your account
					</TextButton>
				</div>
			)}
		</div>
	);
};

export default ResetPassword;
