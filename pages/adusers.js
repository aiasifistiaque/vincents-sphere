import React from 'react';
import AdminPageLayout from '../components/admin/AdminPageLayout';
import AdminUserList from '../components/admin/AdminUserList';

const adusers = () => {
	return (
		<AdminPageLayout select='users'>
			<AdminUserList />
		</AdminPageLayout>
	);
};

export default adusers;
