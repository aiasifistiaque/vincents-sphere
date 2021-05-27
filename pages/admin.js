import React from 'react';
import Page from '../components/Page';
import useGetProfile from '../hooks/useGetProfile';
import Link from 'next/link';
import Loading from '../components/Loading';
import PageContainer from '../components/PageContainer';

const admin = () => {
	const { user, loading } = useGetProfile();
	if (loading) return <Loading />;
	return (
		<Page>
			{user.role != 'admin' ? (
				<div className='loading'>
					<h2>Not Authorized to view this page</h2>
				</div>
			) : (
				<div style={{ display: 'flex' }}>
					<div className='admin-panel-sidebar'>
						<SidebarItem to='users'>View Users</SidebarItem>
						<SidebarItem to='products'>View Products</SidebarItem>
						<SidebarItem to='orders'>View Orders</SidebarItem>
					</div>
					<div className='admin-panel-main'>
						<p>alskdjsakd</p>
					</div>
				</div>
			)}
		</Page>
	);
};

const SidebarItem = ({ children, to }) => {
	return (
		<Link href={`/adminpanel/${to}`}>
			<div className='sidebar-item'>
				<p>{children}</p>
			</div>
		</Link>
	);
};

export default admin;
