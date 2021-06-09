import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import AdminPageLayout from '../../components/admin/AdminPageLayout';
import axios from 'axios';
import { api } from '../../constants';
import { getUnixToDate } from '../../functions';
import Link from 'next/link';
import { LongButton, CustomButton, CancelButton } from '../../components';

const aduser = () => {
	const router = useRouter();
	const { id } = router.query;
	const [user, setUser] = useState({});
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const [edit, setEdit] = useState(false);
	const [role, setRole] = useState('');
	const [reload, setReload] = useState(false);

	useEffect(() => {
		setReload(false);
		setEdit(false);
		(async () => {
			const token = JSON.parse(localStorage.getItem('vincenttoken'));
			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: token,
				},
			};
			setLoading(true);
			try {
				const { data } = await axios.post(api.anUser, { id: id }, config);
				if (data) {
					setUser(data.user);
					setOrders(data.orders);
					setRole(data.user.role);
					setLoading(false);
				} else {
					colsole.log(data);
				}
			} catch (e) {
				console.log(e);
			}
		})();
	}, [id, reload]);

	const editUserRole = async val => {
		setLoading(true);
		const token = JSON.parse(localStorage.getItem('vincenttoken'));
		console.log('role editing');

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};
		try {
			const { data } = await axios.post(
				api.editRole,
				{ id: user._id, role: val },
				config
			);
			if (data) {
				setLoading(false);
				setReload(true);
			} else {
				//colsole.log(data);
			}
		} catch (e) {
			console.log(e);
		}
	};

	if (loading) return <Loading />;

	return (
		<AdminPageLayout>
			<UserProfile
				user={user}
				edit={edit}
				onEdit={() => setEdit(true)}
				cancel={() => setEdit(false)}
				editUserRole={val => editUserRole(val)}
			/>
			<UserOrders orders={orders} />
		</AdminPageLayout>
	);
};

const UserProfile = ({ user, edit, onEdit, cancel, editUserRole }) => {
	const [value, setValue] = useState(user.role);
	return (
		<div className='my-profile'>
			<h3>User Profile</h3>
			<p
				style={{
					wordBreak: 'break-word',
				}}>
				ID: {user._id}
			</p>
			<h5>Name: {user.name}</h5>
			<p
				style={{
					wordBreak: 'break-word',
				}}>
				Email: {user.email}
			</p>
			<p>Role: {user.role}</p>
			{!edit ? (
				<LongButton onClick={onEdit}>Change Role</LongButton>
			) : (
				<>
					<select
						className='order-select'
						value={value}
						onChange={e => {
							setValue(e.target.value);
						}}>
						<option value='admin'>Make Admin</option>
						<option value='manager'>Make Manager</option>
					</select>
					<div style={{ margin: '1em 0' }}>
						<CustomButton onClick={() => editUserRole(value)}>
							Save
						</CustomButton>
						<CancelButton onClick={cancel}>Cancel</CancelButton>
					</div>
				</>
			)}
		</div>
	);
};

const UserOrders = ({ orders }) => {
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
						<Link href={`/adorder/${order._id}`}>
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

export default aduser;
