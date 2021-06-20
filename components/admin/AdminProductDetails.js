import React from 'react';
import { general } from '../../constants';

const AdminProductDetails = ({ product }) => {
	return (
		<div className='admin-product-details'>
			<h1>{product.name}</h1>

			<h6 style={{ margin: '1em 0', fontSize: '1em' }}>Size: {product.size}</h6>

			<h5>Notes: {product.note}</h5>
			<h6>Category: {product.category}</h6>
			<h6 style={{ margin: '1em 0', fontSize: '.9em' }}>
				Sub Category: {product.subCategory}
			</h6>

			<h6 style={{ margin: '.2em 0', fontSize: '1.4em' }}>
				Sold: {product.totalSold}
			</h6>

			<h6 style={{ margin: '.3em 0', fontSize: '.8em' }}>
				Status: {product.status}
			</h6>

			<h6 style={{ margin: 0, fontSize: '.8em' }}>
				Wishlisted: {product.wishlisted}
			</h6>

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
