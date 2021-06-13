import React from 'react';
import { general } from '../../constants';

const ProductDetails = ({ product }) => {
	return (
		<>
			<h1>{product.name}</h1>
			<h4>Size: {product.size}</h4>
			<h5>Notes: {product.note}</h5>
			<hr />
			<p>{product.description}</p>
			<h2>
				Price: {general.takaSymbol}
				{product.price}
			</h2>
		</>
	);
};

export default ProductDetails;
