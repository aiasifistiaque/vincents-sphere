import React from 'react';
import { PositiveBadge, NegativeBadge } from '.';
import { general } from '../../constants';
import OrderSummaryItems from './OrderSummaryItems';

export const OrderSummary = ({ order }) => {
	return (
		<div className='order-summary'>
			<OrderSummaryItems order={order} />
			<p>Status: {order.status.toUpperCase()}</p>
			{order.isPaid ? (
				<PositiveBadge>Paid</PositiveBadge>
			) : (
				<NegativeBadge>Not Paid</NegativeBadge>
			)}
		</div>
	);
};
