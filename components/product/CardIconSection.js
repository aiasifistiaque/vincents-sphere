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
import { useRouter } from 'next/router';
import ProductWrapper from './ProductWrapper';

const CardIconSection = ({ product }) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const { favItems } = useSelector(state => state.favItems);
	const [fav, setFav] = useState(false);

	useEffect(() => {
		if (favItems.find(x => x == product._id)) {
			setFav(true);
		} else setFav(false);
	}, [favItems]);

	return (
		<div className='v-pc-icon-contaner'>
			<div style={{ display: 'flex' }}>
				<FontAwesomeIcon
					icon={faHeart}
					height={35}
					className={fav ? 'v-pc-icons favd' : 'v-pc-icons'}
					onClick={() =>
						fav ? dispatch(removeFromFav(product)) : dispatch(addToFav(product))
					}
				/>
				<ShareIcon className='v-pc-icons' product={product} />
			</div>
			<Link href={`/product/${product._id}`} passHref>
				<ProductWrapper>
					<FontAwesomeIcon
						icon={faChevronRight}
						height={35}
						className='v-pc-icons'
					/>
				</ProductWrapper>
			</Link>
		</div>
	);
};

export default CardIconSection;
