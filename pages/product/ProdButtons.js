import React from 'react';
import ProdQtyButton from '../../components/product/ProdQtyButton';
import {
	ProdPageButton,
	ProdFavButton,
} from '../../components/product/ProdButtons';

const ProdButtons = ({ itemPresent, addLoading, item, product }) => {
	return (
		<div className='prod-page-button-container'>
			{product.countInStock > 0 ? (
				addLoading ? (
					<p>loading</p>
				) : itemPresent ? (
					<ProdQtyButton product={product}>{item.qty}</ProdQtyButton>
				) : (
					<ProdPageButton title='Add to Cart' product={product} />
				)
			) : (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						marginRight: 20,
						padding: '10px 20px',
						backgroundColor: 'whitesmoke',
						cursor: 'not-allowed',
					}}>
					<span style={{ color: 'crimson' }}>Out Of Stock</span>
				</div>
			)}
			<ProdFavButton product={product} />
		</div>
	);
};

export default ProdButtons;
