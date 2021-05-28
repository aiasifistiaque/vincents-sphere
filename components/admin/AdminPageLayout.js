import React from 'react';
import Page from '../Page';
import useGetProfile from '../../hooks/useGetProfile';
import Sidebar from './Sidebar';
import Loading from '../Loading';

const AdminPageLayout = ({ children }) => {
	const { user, loading } = useGetProfile();
	if (loading) return <Loading />;

	return (
		<Page>
			{user.role != 'admin' ? (
				<div className='loading'>
					<h2>Not Authorized to view this page</h2>
				</div>
			) : (
				<div className='admin-page'>
					<Sidebar />
					<div className='admin-panel-main'>{children}</div>
				</div>
			)}
		</Page>
	);
};

export default AdminPageLayout;
