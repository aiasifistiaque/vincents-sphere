import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../../store/actions/cartActions/cartActions';

export const ProdPageButton = ({ title, fun, product }) => {
	const dispatch = useDispatch();

	return (
		<div
			className='prod-page-button'
			onClick={() => dispatch(addToCart(product, 1))}>
			<p>{title}</p>
		</div>
	);
};

export const ProdFavButton = () => {
	const [fav, setFav] = useState(false);
	return (
		<div className='prod-fav-button' onClick={() => setFav(!fav)}>
			<FontAwesomeIcon icon={faHeart} className={fav ? 'icon favd' : 'icon'} />
		</div>
	);
};
