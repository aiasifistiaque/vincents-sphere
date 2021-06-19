import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
	addToCart,
	removeFromFav,
	addToFav,
} from '../../store/actions/cartActions/cartActions';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import { ErrorText } from '..';
import HeadingText from '../texts/HeadingText';

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
	const { loading, isLoggedIn } = useIsLoggedIn();
	const [banner, setBanner] = useState(false);
	const [color, setColor] = useState(false);

	useEffect(() => {
		if (favItems.find(x => x == product._id)) {
			setFav(true);
			setColor(true);
		} else {
			setFav(false);
			setColor(false);
		}
	}, [favItems]);

	if (banner)
		return (
			<div
				style={{
					alignItems: 'center',
					display: 'flex',
				}}>
				<HeadingText h={6} color='crimson' margin='1em'>
					Log in to use this feature
				</HeadingText>
			</div>
		);

	return (
		<div
			className='prod-fav-button'
			onClick={() => {
				if (isLoggedIn) {
					if (fav) {
						setColor(false);
						dispatch(removeFromFav(product));
					} else {
						setColor(true);
						dispatch(addToFav(product));
					}
				} else setBanner(true);
			}}>
			<FontAwesomeIcon
				icon={faHeart}
				className={color ? 'icon favd' : 'icon'}
			/>
			<span>Add to Wishlist</span>
		</div>
	);
};
