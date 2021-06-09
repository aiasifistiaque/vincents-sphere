import React from 'react';
import { general } from '../../constants';

const OrderSummaryItems = ({ order, edit }) => {
	return (
		<>
			<h3>Order {edit ? 'Edit' : 'Summary'}</h3>
			<p style={{ fontSize: '1em', wordBreak: 'break-word' }}>
				ID- {order._id}
			</p>
			<p>
				Items: {general.takaSymbol}
				{order.totalPrice}
			</p>
			<p>
				VAT: {general.takaSymbol}
				{order.vat}
			</p>
			<p>
				Shipping: {general.takaSymbol}
				{order.shippingPrice}
			</p>
			<p>
				Total: {general.takaSymbol}
				{order.totalPrice}
			</p>
		</>
	);
};

export default OrderSummaryItems;
