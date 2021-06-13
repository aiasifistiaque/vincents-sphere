import React from 'react';
import { getUnixToDate } from '../../functions';
import { useRouter } from 'next/router';

const ProfileOrderCard = ({ order }) => {
	const router = useRouter();
	return (
		<div className='order-card'>
			<p>ID: VC-{order._id}</p>
			{
				//<td>{order.createdAt}</td>
			}
			<p>Date: {getUnixToDate(order.createdAt)}</p>
			<p>Total: ৳{order.totalPrice}</p>
			<p>Paid: {order.isPaid ? 'yes' : 'no'}</p>
			<p>Delivered: {order.isDelivered ? 'yes' : 'no'}</p>
			<div
				className='admin-panel-button'
				onClick={() => router.push(`/order/${order._id}`)}>
				<p>View Details</p>
			</div>
		</div>
	);
};

export default ProfileOrderCard;
