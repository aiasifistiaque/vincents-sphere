import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading';
import getAllOrders from '../../store/actions/orderActions/getAllOrders';
import Router from 'next/router';
import {
	AdminListContainer,
	AdminListCard,
	AText,
	AButton,
} from './AdminListCard';
import { getUnixToDate } from '../../functions';
import { general } from '../../constants';
import AdminSort from './AdminSort';
import { orderSort } from '../../data/sortData';

const OrderListUpdated = () => {
	const dispatch = useDispatch();
	const [sort, setSort] = useState('Newest');

	const getOrders = useSelector(state => state.getAllOrders);
	const { orders, loading, error } = getOrders;

	useEffect(() => {
		dispatch(getAllOrders(sort));
	}, [dispatch, sort]);

	return (
		<div className='my-orders'>
			<AdminSort sortData={orderSort} value={sort} setValue={e => setSort(e)}>
				<h3>ALL ORDERS</h3>
				<p>Total Orders: {orders.length || 'LOADING...'}</p>
			</AdminSort>

			{loading ? (
				<Loading />
			) : orders.length == 0 ? (
				<p>no current orders</p>
			) : (
				<AdminListContainer>
					{orders.map((order, i) => (
						<AdminListCard
							key={i}
							style={{ border: '1px solid rgba(0,0,0,.1)', height: 10 }}>
							<AText>ID- {order._id}</AText>
							<AText>Order Date: {getUnixToDate(order.createdAt)}</AText>
							<AText>
								Total: {general.takaSymbol}
								{order.totalPrice}
							</AText>
							<AText>{order.isPaid ? 'Paid' : 'Not Paid'}</AText>
							<AText>{order.status && order.status}</AText>
							<AButton onClick={() => Router.push(`/adorder/${order._id}`)}>
								Details
							</AButton>
						</AdminListCard>
					))}
				</AdminListContainer>
			)}
		</div>
	);
};

export default OrderListUpdated;
