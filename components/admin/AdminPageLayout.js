import React from 'react';
import useGetProfile from '../../hooks/useGetProfile';
import Sidebar from './Sidebar';
import PageLoading, { AdminPageLoading } from '../PageLoading';
import AdminPage from '../AdminPage';

const AdminPageLayout = ({ children, select }) => {
	const { user, loading } = useGetProfile();
	if (loading) return <AdminPageLoading />;

	return (
		<AdminPage>
			{user.role != 'admin' ? (
				<div className='loading'>
					<h2>Not Authorized to view this page</h2>
				</div>
			) : (
				<div className='admin-page'>
					<Sidebar select={select} />

					<div className='admin-panel-main'>{children}</div>
				</div>
			)}
		</AdminPage>
	);
};

export default AdminPageLayout;
