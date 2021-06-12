import React from 'react';
import Link from 'next/link';
import { getUnixToDate } from '../../functions';
import { useRouter } from 'next/router';

const AdUserOrders = ({ orders }) => {
	const router = useRouter();
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
						<div
							className='admin-panel-button'
							onClick={() => router.push(`/adorder/${order._id}`)}>
							<p>View Details</p>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default AdUserOrders;
