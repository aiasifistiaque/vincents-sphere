import React from 'react';
import { general } from '../../constants';

const AdminProductDetails = ({ product }) => {
	return (
		<div className='admin-product-details'>
			<h1>{product.name}</h1>

			<h4>{product.size}</h4>
			<h5>Notes: {product.note}</h5>
			<hr />
			<p>{product.description}</p>
			<h6>Stock: {product.countInStock}</h6>
			<h2>
				Price: {general.takaSymbol}
				{product.price}
			</h2>
		</div>
	);
};

export default AdminProductDetails;
