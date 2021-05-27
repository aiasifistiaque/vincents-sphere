import React from 'react';
import Page from '../components/Page';
import useGetProfile from '../hooks/useGetProfile';
import Loading from '../components/Loading';
import Link from 'next/link';
import useGetMyOrders from '../hooks/useGetMyOrders';
import PageContainer from '../components/PageContainer';
import Router from 'next/router';

const profile = () => {
	return (
		<Page>
			<div className='profile-page'>
				<MyProfile />
				<MyOrders />
			</div>
		</Page>
	);
};

const MyProfile = () => {
	const { user, loading } = useGetProfile();
	if (loading) return <Loading />;
	return (
		<div className='my-profile'>
			<h3>profile</h3>
			<h5>{user.name}</h5>
			<p>{user.email}</p>
			{user.role == 'admin' && (
				<Link href='/admin'>
					<div
						style={{
							display: 'flex',
							padding: '5px 20px 5px 0',
							cursor: 'pointer',
						}}>
						<p style={{ padding: 0, margin: 0, color: 'dodgerblue' }}>
							Go to admin panel
						</p>
					</div>
				</Link>
			)}
		</div>
	);
};

const MyOrders = () => {
	const { orders, loading } = useGetMyOrders();

	if (loading) return <Loading />;

	return (
		<div className='my-orders'>
			<h3>My orders</h3>
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
								<td>Tk. {order.totalPrice}</td>
								<td>{order.isPaid ? 'yes' : 'no'}</td>
								<td>{order.isDelivered ? 'yes' : 'no'}</td>
								<td
									style={{ color: 'dodgerblue', cursor: 'pointer' }}
									onClick={() => Router.push(`/order/${order._id}`)}>
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

export default profile;
