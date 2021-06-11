import React from 'react';
import AdminPageLayout from '../components/admin/AdminPageLayout';
import AddNewProduct from '../components/admin/AddNewProduct';

const addproduct = () => {
	return (
		<AdminPageLayout>
			<AddNewProduct />
		</AdminPageLayout>
	);
};

export default addproduct;
