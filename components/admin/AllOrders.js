import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading';
import getAllOrders from '../../store/actions/orderActions/getAllOrders';
import Router from 'next/router';

const AllOrders = () => {
	const dispatch = useDispatch();

	const getOrders = useSelector(state => state.getAllOrders);
	const { orders, loading, error } = getOrders;

	useEffect(() => {
		dispatch(getAllOrders());
	}, [dispatch]);

	if (loading) return <Loading />;

	return (
		<div className='my-orders'>
			<h3>ALL ORDERS</h3>
			<p>Total Orders: {orders.length}</p>
			{orders.length == 0 ? (
				<p>no current orders</p>
			) : (
				<table className='order-table'>
					<thead>
						<tr>
							<td>ID</td>
							{
								//<th>date</th>
							}

							<td>total</td>
							<td>paid</td>
							<td>delivered</td>
							<td>details</td>
						</tr>
					</thead>

					<tbody>
						{orders.map((order, i) => (
							<tr
								key={i}
								style={{ border: '1px solid rgba(0,0,0,.1)', height: 10 }}>
								<td>{order._id}</td>
								{
									//<td>{order.createdAt}</td>
								}
								<td>৳ {order.totalPrice}</td>
								<td>{order.isPaid ? 'yes' : 'no'}</td>
								<td>{order.isDelivered ? 'yes' : 'no'}</td>
								<td
									style={{ color: 'dodgerblue', cursor: 'pointer' }}
									onClick={() => Router.push(`/adorder/${order._id}`)}>
									Detail
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default AllOrders;
