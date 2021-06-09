import React from 'react';
import AdminPageLayout from '../components/admin/AdminPageLayout';
import OrderListUpdated from '../components/admin/OrderListUpdated';

const adorders = () => {
	return (
		<AdminPageLayout select='orders'>
			<OrderListUpdated />
		</AdminPageLayout>
	);
};

export default adorders;
