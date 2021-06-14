import React from 'react';
import { general } from '../../constants';
import ProdButtons from '../../pages/product/ProdButtons';
import ReviewStar from '../review/ReviewStar';

const ProductDetailsUpdated = ({ product, addLoading, itemPresent, item }) => {
	console.log(product);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				flex: 1,
				justifyContent: 'space-between',
				padding: '.5em',
			}}>
			<h1>{product.name}</h1>
			<h4>Size: {product.size}</h4>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
				}}>
				<ReviewStar stars={product.rating} />
				<p className='num-review-text' style={{ fontWeight: '600' }}>
					{product.numReviews} Reviews
				</p>
			</div>

			<div>
				<h5>Notes: {product.note}</h5>

				<ThisText>Category: {product.category}</ThisText>
				<ThisText>Sub Category:{product.subCategory}</ThisText>
			</div>

			<h4 style={{ margin: '1em 0' }}>
				Price: {general.takaSymbol}
				{product.price}
			</h4>

			<ProdButtons
				itemPresent={itemPresent}
				addLoading={addLoading}
				product={product}
				item={item}
			/>
		</div>
	);
};

const ThisText = ({ children }) => {
	return <p style={{ margin: 0, padding: 0, fontSize: '.9em' }}>{children}</p>;
};

export default ProductDetailsUpdated;
