import React from 'react';
import { LongButton, ErrorText, SuccessText } from '..';

const VerifyOtp = ({
	otp,
	setOtp,
	success,
	error,
	text,
	errorText,
	verifyOtp,
	loading,
}) => {
	return (
		<div>
			<div className='edit-reset-input'>
				<label>OTP</label>
				<input
					type='text'
					placeholder='Enter OTP'
					value={otp}
					onChange={e => setOtp(e.target.value)}
				/>
			</div>

			{success && <SuccessText>{text}</SuccessText>}
			{error && <ErrorText>{errorText}</ErrorText>}

			<LongButton onClick={verifyOtp}>
				{loading ? 'loading...' : 'Proceed'}
			</LongButton>
		</div>
	);
};

export default VerifyOtp;
