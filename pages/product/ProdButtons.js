import React from 'react';
import ProdQtyButton from '../../components/product/ProdQtyButton';
import {
	ProdPageButton,
	ProdFavButton,
} from '../../components/product/ProdButtons';

const ProdButtons = ({ itemPresent, addLoading, item, product }) => {
	return (
		<div className='prod-page-button-container'>
			{addLoading ? (
				<p>loading</p>
			) : itemPresent ? (
				<ProdQtyButton product={product}>{item.qty}</ProdQtyButton>
			) : (
				<ProdPageButton title='Add to Cart' product={product} />
			)}
			<ProdFavButton product={product} />
		</div>
	);
};

export default ProdButtons;
