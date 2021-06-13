import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading';
import Router from 'next/router';
import {
	AdminListContainer,
	AdminListCard,
	AText,
	AButton,
} from './AdminListCard';
import { getUnixToDate } from '../../functions';
import getAllUserAction from '../../store/actions/userActions/getAllUserAction';
import AdminSort from './AdminSort';
import { userSort } from '../../data/sortData';
import TotalCount from '../explore/TotalCount';
import LoadMoreSection from '../explore/LoadMoreSection';
import NetworkError from '../NetworkError';

const AdminUserList = () => {
	const dispatch = useDispatch();
	const [sort, setSort] = useState('All');

	const getUsers = useSelector(state => state.getAllUsers);
	const { users, loading, error, count } = getUsers;

	const [page, setPage] = useState(0);
	const [end, setEnd] = useState(false);
	const [total, setTotal] = useState([]);

	useEffect(() => {
		dispatch(getAllUserAction(sort, page));
	}, [dispatch, sort, page]);

	useEffect(() => {
		if (page == 0) {
			setEnd(false);
			setTotal([]);
		}
		let newOrders = [];
		if (total.length > 0 && page > 0) {
			newOrders = total.concat(users);
			setTotal(newOrders);
		} else {
			setTotal(users);
		}

		if (!loading && users.length == 0) setEnd(true);
	}, [users]);

	if (error) return <NetworkError />;

	return (
		<div className='my-orders'>
			<AdminSort
				sortData={userSort}
				value={sort}
				setValue={e => {
					setTotal([]);
					setPage(0);
					setSort(e);
				}}>
				<h3>ALL Users</h3>
				<p>
					Total Users: {loading ? 'LOADING...' : `${total.length} of ${count}`}
				</p>{' '}
			</AdminSort>

			{loading && page == 0 ? (
				<Loading />
			) : !loading && total.length == 0 ? (
				<p>no current orders</p>
			) : (
				<AdminListContainer>
					{total.map((user, i) => (
						<AdminListCard
							key={i}
							style={{ border: '1px solid rgba(0,0,0,.1)', height: 10 }}>
							<AText>{user.name}</AText>
							<AText>{user.email}</AText>
							<AText>Role: {user.role}</AText>
							<AText>Joined: {getUnixToDate(user.createdAt)}</AText>
							<AButton onClick={() => Router.push(`/aduser/${user._id}`)}>
								Details
							</AButton>
						</AdminListCard>
					))}
					<div>
						<TotalCount item={total} loading={loading} count={count} />
						<LoadMoreSection
							onClick={() => setPage(page + 1)}
							loading={loading}
							end={end}
						/>
					</div>
				</AdminListContainer>
			)}
		</div>
	);
};

export default AdminUserList;
