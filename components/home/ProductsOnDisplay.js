import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHeart,
	faShare,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const ProductsOnDisplay = ({ product }) => {
	const [fav, setFav] = useState(false);
	return (
		<div className='section-card'>
			<Link href={`/product/${product._id}`}>
				<div style={{ cursor: 'pointer' }}>
					<Image
						src={product.image}
						alt={product.name}
						width={400}
						height={400}
					/>
					<div className='section-card-text'>
						<p className='section-sub-category'>{product.subCategory}</p>
						<h6>{product.name}</h6>
						<h6 className='section-size-text'>{product.size}</h6>
					</div>
				</div>
			</Link>
			<div className='v-pc-icon-contaner'>
				<div style={{ display: 'flex' }}>
					<FontAwesomeIcon
						icon={faHeart}
						className={fav ? 'v-pc-icons favd' : 'v-pc-icons'}
						onClick={() => setFav(!fav)}
					/>
					<FontAwesomeIcon icon={faShare} className='v-pc-icons' />
				</div>
				<Link href={`/product/${product._id}`}>
					<FontAwesomeIcon icon={faChevronRight} className='v-pc-icons' />
				</Link>
			</div>
		</div>
	);
};

export default ProductsOnDisplay;
