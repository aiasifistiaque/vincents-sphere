import React from 'react';
import Link from 'next/link';
import { getUnixToDate } from '../../functions';

const AdUserOrders = ({ orders }) => {
	return (
		<div className='my-orders'>
			<p>Total Orders: {orders.length}</p>
			{orders.length == 0 ? (
				<p>no current orders</p>
			) : (
				orders.map((order, i) => (
					<div className='order-card' key={i}>
						<p
							style={{
								wordBreak: 'break-word',
							}}>
							ID: {order._id}
						</p>

						<p>Date: {getUnixToDate(order.createdAt)}</p>
						<p>Total: ৳{order.totalPrice}</p>
						<p>Paid: {order.isPaid ? 'yes' : 'no'}</p>
						<p>Status: {order.status}</p>
						<Link href={`/adorder/${order._id}`}>
							<div className='admin-panel-button'>
								<p>View Details</p>
							</div>
						</Link>
					</div>
				))
			)}
		</div>
	);
};

export default AdUserOrders;
