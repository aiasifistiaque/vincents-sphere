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

const AdminUserList = () => {
	const dispatch = useDispatch();
	const [sort, setSort] = useState('All');

	const getUsers = useSelector(state => state.getAllUsers);
	const { users, loading, error } = getUsers;

	useEffect(() => {
		dispatch(getAllUserAction(sort));
	}, [dispatch, sort]);

	return (
		<div className='my-orders'>
			<AdminSort sortData={userSort} value={sort} setValue={e => setSort(e)}>
				<h3>ALL Users</h3>
				<p>Total Users: {users.length || 'LOADING...'}</p>
			</AdminSort>

			{loading ? (
				<Loading />
			) : users.length == 0 ? (
				<p>no current orders</p>
			) : (
				<AdminListContainer>
					{users.map((user, i) => (
						<AdminListCard
							key={i}
							style={{ border: '1px solid rgba(0,0,0,.1)', height: 10 }}>
							<AText>{user.name}</AText>
							<AText>{user.email}</AText>
							<AText>Role: {user.role}</AText>
							<AText>Joined: {getUnixToDate(user.createdAt)}</AText>
							<AButton onClick={() => Router.push(`/adorder/${user._id}`)}>
								Details
							</AButton>
						</AdminListCard>
					))}
				</AdminListContainer>
			)}
		</div>
	);
};

export default AdminUserList;
