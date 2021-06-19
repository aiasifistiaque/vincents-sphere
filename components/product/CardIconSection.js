import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faHeart,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
	removeFromFav,
	addToFav,
} from '../../store/actions/cartActions/cartActions';
import ShareIcon from './ShareIcon';
import { useRouter } from 'next/router';
import ProductWrapper from './ProductWrapper';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';

const CardIconSection = ({ product }) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const { loading, isLoggedIn } = useIsLoggedIn();

	const [banner, setBanner] = useState(false);

	const { favItems } = useSelector(state => state.favItems);
	const [fav, setFav] = useState(false);

	useEffect(() => {
		if (favItems.find(x => x == product._id)) {
			setFav(true);
		} else setFav(false);
	}, [favItems]);

	const bannerClosed = () => {
		setBanner(false);
		console.log('close banner');
	};

	const onLikePress = () => {
		if (!isLoggedIn) {
			setBanner(true);
			setTimeout(bannerClosed, 5000);
		} else {
			fav ? dispatch(removeFromFav(product)) : dispatch(addToFav(product));
		}
	};

	if (loading) return null;

	return (
		<div className='v-pc-icon-contaner'>
			{banner ? (
				<div className='card-banner' onClick={() => setBanner(false)}>
					<p
						style={{
							margin: 0,
							padding: 0,
							fontSize: '.6em',
							color: 'whitesmoke',
							whiteSpace: 'nowrap',
						}}>
						Log in to add to wishlist
					</p>
					{/* <FontAwesomeIcon
						onClick={() => setBanner(false)}
						icon={faTimes}
						style={{
							color: 'black',
							backgroundColor: 'whitesmoke',
							borderRadius: 100,
						}}
						className='v-pc-icons'
					/> */}
				</div>
			) : (
				<div style={{ display: 'flex' }}>
					<FontAwesomeIcon
						icon={faHeart}
						height={35}
						className={fav ? 'v-pc-icons favd' : 'v-pc-icons'}
						onClick={onLikePress}
					/>
					<ShareIcon className='v-pc-icons' product={product} />
				</div>
			)}
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
