import React from 'react';
import ProdQtyButton from '../../components/product/ProdQtyButton';
import {
	ProdPageButton,
	ProdFavButton,
} from '../../components/product/ProdButtons';
import OutOfStockButton from '../../components/buttons/OutOfStockButton';

const ProdButtons = ({ itemPresent, addLoading, item, product, stock }) => {
	return (
		<div className='prod-page-button-container'>
			{stock > 0 ? (
				addLoading ? (
					<p>loading</p>
				) : itemPresent ? (
					<ProdQtyButton product={product}>{item.qty}</ProdQtyButton>
				) : (
					<ProdPageButton title='Add to Cart' product={product} />
				)
			) : (
				<OutOfStockButton>Out Of Stock</OutOfStockButton>
			)}
			<ProdFavButton product={product} />
		</div>
	);
};

export default ProdButtons;
