import React from 'react';
import AdminPageLayout from '../components/admin/AdminPageLayout';
import ProductList from '../components/admin/ProductList';

const adproducts = () => {
	return (
		<AdminPageLayout>
			<ProductList />
		</AdminPageLayout>
	);
};

export default adproducts;
