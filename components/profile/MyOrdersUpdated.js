import React from 'react';
import Loading from '../Loading';
import useGetMyOrders from '../../hooks/useGetMyOrders';
import { getUnixToDate } from '../../functions';
import Link from 'next/link';

const MyOrdersUpdated = () => {
	const { orders, loading } = useGetMyOrders();

	if (loading) return <Loading />;

	console.log(orders[0]);

	return (
		<div className='my-orders'>
			<p>Total Orders: {orders.length}</p>
			{orders.length == 0 ? (
				<p>no current orders</p>
			) : (
				orders.map((order, i) => (
					<div className='order-card' key={i}>
						<p>ID: VC-{order._id}</p>
						{
							//<td>{order.createdAt}</td>
						}
						<p>Date: {getUnixToDate(order.createdAt)}</p>
						<p>Total: ৳{order.totalPrice}</p>
						<p>Paid: {order.isPaid ? 'yes' : 'no'}</p>
						<p>Delivered: {order.isDelivered ? 'yes' : 'no'}</p>
						<Link href={`/order/${order._id}`}>
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

export default MyOrdersUpdated;
