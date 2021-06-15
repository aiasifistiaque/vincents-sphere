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
	ANButton,
} from './AdminListCard';
import { getUnixToDate } from '../../functions';
import { general } from '../../constants';
import AdminSort from './AdminSort';
import { orderSort } from '../../data/sortData';
import LoadMoreSection from '../explore/LoadMoreSection';
import NetworkError from '../NetworkError';
import TotalCount from '../explore/TotalCount';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import unixToDateMonth from '../../functions/unixToDateMonth';

const OrderListUpdated = () => {
	const dispatch = useDispatch();
	const [sort, setSort] = useState('Newest');

	const getOrders = useSelector(state => state.getAllOrders);
	const { orders, loading, error, count } = getOrders;

	const [page, setPage] = useState(0);
	const [end, setEnd] = useState(false);
	const [total, setTotal] = useState([]);

	useEffect(() => {
		dispatch(getAllOrders(sort, page));
	}, [dispatch, sort, page]);

	useEffect(() => {
		if (page == 0) {
			setEnd(false);
			setTotal([]);
		}
		let newOrders = [];
		if (total.length > 0 && page > 0) {
			newOrders = total.concat(orders);
			setTotal(newOrders);
		} else {
			setTotal(orders);
		}

		if (!loading && orders.length == 0) setEnd(true);
	}, [orders]);

	if (error) return <NetworkError />;

	return (
		<div className='my-orders'>
			<AdminSort
				sortData={orderSort}
				value={sort}
				setValue={e => {
					setEnd(false);
					setPage(0);
					setTotal([]);
					setSort(e);
				}}>
				<h3>ALL ORDERS</h3>

				<p>
					Total Orders:{' '}
					{!loading ? `${total.length} of ${count}` : 'LOADING...'}
				</p>
			</AdminSort>

			{loading && page == 0 ? (
				<Loading />
			) : total.length == 0 ? (
				<p>no current orders</p>
			) : (
				<AdminListContainer>
					{total.map((order, i) => (
						<AdminListCard
							key={i}
							seen={order.seen != 1 ? true : false}
							style={{
								border: '1px solid rgba(0,0,0,.3)',
								height: 10,
							}}>
							{order.seen != 1 && (
								<FontAwesomeIcon
									icon={faCircle}
									height={10}
									style={{ margin: '0 1em' }}
								/>
							)}
							<AText>ID- {order._id}</AText>
							<AText>Date: {unixToDateMonth(order.createdAt)}</AText>
							<AText>
								Total: {general.takaSymbol}
								{order.totalPrice}
							</AText>
							<AText>{order.isPaid ? 'Paid' : 'Not Paid'}</AText>
							<AText>{order.status && order.status}</AText>
							<ANButton href={`/adorder/${order._id}`}>Details</ANButton>
						</AdminListCard>
					))}
					<div>
						<TotalCount loading={loading} item={total} count={count} />
						<LoadMoreSection
							end={end}
							loading={loading}
							onClick={() => setPage(page + 1)}
						/>
					</div>
				</AdminListContainer>
			)}
		</div>
	);
};

export default OrderListUpdated;
