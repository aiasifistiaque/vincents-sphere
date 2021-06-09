import React from 'react';
import OrderSummaryItems from './OrderSummaryItems';
import { PositiveBadge, NegativeBadge } from '.';
import OrderStatusSelect from './OrderStatusSelect';
import OrderPaymentSelect from './OrderPaymentSelect';

export const OrderEdit = ({ order, setSortValue, status, paid, setPaid }) => {
	return (
		<div className='order-summary'>
			<OrderSummaryItems order={order} edit />
			<p>Status: {order.status.toUpperCase()}</p>

			{order.isPaid ? (
				<PositiveBadge>Paid</PositiveBadge>
			) : (
				<NegativeBadge>Not Paid</NegativeBadge>
			)}
			<label style={{ fontWeight: '600' }}>Edit order status:</label>
			<OrderStatusSelect
				sortValue={status}
				setSortValue={e => setSortValue(e)}
			/>

			<label style={{ fontWeight: '600', marginTop: '1em' }}>
				Edit payment status:
			</label>
			<OrderPaymentSelect
				paymentValue={paid}
				setPaymentValue={e => setPaid(e)}
			/>
		</div>
	);
};

export default OrderEdit;
