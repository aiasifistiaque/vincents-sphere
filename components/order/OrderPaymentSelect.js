import React, { useState } from 'react';

const OrderPaymentSelect = ({ paymentValue, setPaymentValue }) => {
	const [val, setVal] = useState(paymentValue);
	return (
		<select
			className='order-select'
			value={val}
			onChange={e => {
				setVal(e.target.value);
				setPaymentValue(e.target.value);
			}}>
			<option value={true}>Paid</option>
			<option value={false}>Not Paid</option>
		</select>
	);
};

export default OrderPaymentSelect;
