import React from 'react';
import AdminPageLayout from '../components/admin/AdminPageLayout';
import useGetDash from '../hooks/useGetDash';
import Loading from '../components/Loading';
import { general } from '../constants';

const admin = () => {
	return (
		<AdminPageLayout select='dash'>
			<DashboardContainer>
				<ItemCount option='all orders'>Total Orders</ItemCount>
				<ItemCount option='pending orders'>Pedning Orders</ItemCount>
				<ItemCount option='completed orders'>Completed Orders</ItemCount>
				<ItemCount option='all products'>Total Products</ItemCount>
				<ItemAmount option='pending orders'>Amount due</ItemAmount>
				<ItemAmount option='completed orders'>Amount received</ItemAmount>
				<ItemCount option='all users'>Total Users</ItemCount>
				<ItemCount option='admin users'>Total Admin</ItemCount>
			</DashboardContainer>
		</AdminPageLayout>
	);
};

const DashboardContainer = ({ children }) => {
	return (
		<div className='dashboard'>
			<h3>Admin Dashboard</h3>
			<div className='dashboard-container'>{children}</div>
		</div>
	);
};

const ItemAmount = ({ option, children }) => {
	const { dash, loading } = useGetDash(option);
	if (loading) return <Loading />;
	return (
		<DashItemContainer title={children}>
			{general.takaSymbol}
			{dash.total}
		</DashItemContainer>
	);
};

const ItemCount = ({ option, children }) => {
	const { dash, loading } = useGetDash(option);
	if (loading) return <Loading />;
	return <DashItemContainer title={children}>{dash.count}</DashItemContainer>;
};

const DashItemContainer = ({ title, children }) => {
	return (
		<div className='dash-item-container'>
			<h5>{title || ''}</h5>
			<p>{children}</p>
		</div>
	);
};

export default admin;
