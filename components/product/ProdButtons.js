import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
	addToCart,
	removeFromFav,
	addToFav,
} from '../../store/actions/cartActions/cartActions';

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

export const ProdFavButton = ({ product }) => {
	const dispatch = useDispatch();
	const { favItems } = useSelector(state => state.favItems);
	const [fav, setFav] = useState(false);

	useEffect(() => {
		if (favItems.find(x => x == product._id)) {
			setFav(true);
		} else setFav(false);
	}, [favItems]);

	return (
		<div
			className='prod-fav-button'
			onClick={() =>
				fav ? dispatch(removeFromFav(product)) : dispatch(addToFav(product))
			}>
			<FontAwesomeIcon icon={faHeart} className={fav ? 'icon favd' : 'icon'} />
		</div>
	);
};
