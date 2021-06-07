import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
	removeFromFav,
	addToFav,
} from '../../store/actions/cartActions/cartActions';
import ShareIcon from './ShareIcon';

const CardIconSection = ({ product }) => {
	const dispatch = useDispatch();

	const { favItems } = useSelector(state => state.favItems);
	const [fav, setFav] = useState(false);

	useEffect(() => {
		//console.log(favItems);
		if (favItems.find(x => x == product._id)) {
			setFav(true);
		} else setFav(false);
	}, [favItems]);

	return (
		<div className='v-pc-icon-contaner'>
			<div style={{ display: 'flex' }}>
				<FontAwesomeIcon
					icon={faHeart}
					className={fav ? 'v-pc-icons favd' : 'v-pc-icons'}
					onClick={() =>
						fav ? dispatch(removeFromFav(product)) : dispatch(addToFav(product))
					}
				/>
				<ShareIcon className='v-pc-icons' product={product} />
			</div>
			<Link href={`/product/${product._id}`}>
				<FontAwesomeIcon icon={faChevronRight} className='v-pc-icons' />
			</Link>
		</div>
	);
};

export default CardIconSection;
