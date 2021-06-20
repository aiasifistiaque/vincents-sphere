import React from 'react';
import { general } from '../../constants';
import getUnixToDate from '../../functions/unixToDate';
import PriceTable from '../texts/PriceTable';

const OrderSummaryItems = ({ order, edit }) => {
	return (
		<>
			<h3>Order {edit ? 'Edit' : 'Summary'}</h3>
			<p style={{ fontSize: '1em', wordBreak: 'break-word' }}>
				ID- {order._id}
			</p>
			<p>Date: {getUnixToDate(order.createdAt)}</p>
			<PriceTable title='Items' margin='1em 1em .5em 0'>
				{order.totalPrice}
			</PriceTable>
			<PriceTable title='Vat' margin='.5em 1em .5em 0'>
				{order.vat}
			</PriceTable>
			<PriceTable title='Shipping' margin='.5em 1em 0 0'>
				{order.shippingPrice}
			</PriceTable>
			<div style={{ margin: '0 1em 0 0' }}>
				<hr />
			</div>

			<PriceTable title='Total' margin='0 1em 2em 0'>
				{order.totalPrice}
			</PriceTable>
		</>
	);
};

export default OrderSummaryItems;
