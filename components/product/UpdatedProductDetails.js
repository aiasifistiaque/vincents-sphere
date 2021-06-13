import React from 'react';

const UpdatedProductDetails = ({ product }) => {
	return (
		<div
			style={{
				backgroundColor: 'white',
				margin: '2em 1em',
				borderRadius: 4,
			}}>
			<h1 style={{ marginBottom: 20, color: 'black' }}>Description</h1>
			<p style={{ lineHeight: '2em', color: 'black' }}>{product.description}</p>
		</div>
	);
};

export default UpdatedProductDetails;
