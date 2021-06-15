import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import ProfileOrderCard from './ProfileOrderCard';
import userOrdersAction from '../../store/actions/orderActions/userOrderAction';
import NetworkError from '../NetworkError';
import { TextButton } from '..';
import LoadMoreButton from '../explore/LoadMoreButton';
import EndOfResult from '../explore/EndOfResult';

const MyOrdersUpdated = () => {
	const { orders, loading, error, count } = useSelector(
		state => state.userOrders
	);
	const dispatch = useDispatch();
	const [select, setSelect] = useState('Current');
	const [page, setPage] = useState(0);
	const [pageLoading, setPageLoading] = useState(true);
	const [end, setEnd] = useState(false);
	const [total, setTotal] = useState([]);

	useEffect(() => {
		dispatch(userOrdersAction(select, page));
	}, [page, select]);

	useEffect(() => {
		if (page == 0) {
			setPageLoading(true);
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
		setPageLoading(false);
		if (!loading && orders.length == 0) setEnd(true);
	}, [orders]);

	if (pageLoading) return <Loading />;
	if (error) return <NetworkError />;
	else
		return (
			<div className='my-orders'>
				<p>
					Total {select} Orders:{' '}
					{loading ? 'loading...' : `${total.length} of ${count}`}
				</p>
				{select == 'Current' ? (
					<TextButton
						onClick={() => {
							setSelect('Past');
							setTotal([]);
							setPageLoading(true);
						}}>
						View Past Orders
					</TextButton>
				) : (
					<TextButton
						onClick={() => {
							setSelect('Current');
							setTotal([]);
							setPageLoading(true);
						}}>
						View Current Orders
					</TextButton>
				)}
				{!loading && total.length == 0 ? (
					<p>no {select} orders</p>
				) : (
					total.map((order, i) => <ProfileOrderCard order={order} key={i} />)
				)}
				{end ? (
					<EndOfResult />
				) : (
					<LoadMoreButton onClick={() => setPage(page + 1)} loading={loading} />
				)}
			</div>
		);
};

export default MyOrdersUpdated;
