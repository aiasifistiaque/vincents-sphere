import React from 'react';
import AdminPageLayout from '../components/admin/AdminPageLayout';
import ProductListUpdated from '../components/admin/ProductListUpdated';

const adproducts = () => {
	return (
		<AdminPageLayout select='products'>
			<ProductListUpdated />
		</AdminPageLayout>
	);
};

export default adproducts;
