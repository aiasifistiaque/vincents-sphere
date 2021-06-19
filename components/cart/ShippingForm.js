import React from 'react';
import { ErrorText, LongButton } from '..';
import HeadingText from '../texts/HeadingText';

const ShippingForm = ({
	address,
	setAddress,
	city,
	setCity,
	phone,
	setPhone,
	postCode,
	setPostCode,
	error,
	errorMsg,
	orderLoading,
	submit,
}) => {
	return (
		<div className='login-page'>
			<div className='login-form'>
				<HeadingText h={3} margin='0 0 .5em 0'>
					Shipping
				</HeadingText>

				<label>Address</label>
				<textarea
					type='text'
					placeholder='address'
					value={address}
					onChange={e => setAddress(e.target.value)}
					rows={3}
				/>
				<label>City</label>
				<input
					type='text'
					placeholder='city'
					value={city}
					onChange={e => setCity(e.target.value)}
				/>
				<label>Phone Number</label>
				<input
					type='number'
					placeholder='phone'
					value={phone}
					onChange={e => setPhone(e.target.value)}
					required
				/>
				<label>Post Code</label>
				<input
					type='text'
					placeholder='post code'
					value={postCode}
					onChange={e => setPostCode(e.target.value)}
				/>
				<label>Payment Method</label>
				<input type='text' placeholder='cash on delivery' disabled />
				{error && <ErrorText>{errorMsg}</ErrorText>}

				<LongButton onClick={submit}>
					{orderLoading ? 'loading...' : 'Continue'}
				</LongButton>
			</div>
		</div>
	);
};

export default ShippingForm;
