import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SearchProducts = ({ product, admin }) => {
	return (
		<Link
			href={admin ? `/adproduct/${product._id}` : `/product/${product._id}`}>
			<div className='search-prod-card'>
				<div className='spc-image-container'>
					<Image
						src={product.image}
						alt={product.name}
						width={60}
						height={60}
						className='spc-image'
					/>
				</div>

				<div className='spc-section'>
					<p className='spc-name'>{product.name}</p>
				</div>
				<div className='spc-section'>
					<p className='card-price'>৳{product.price}</p>
				</div>
				<div className='spc-icon'>
					<Link href={`/product/${product._id}`}>
						<FontAwesomeIcon icon={faChevronRight} className='v-pc-icons' />
					</Link>
				</div>
			</div>
		</Link>
	);
};

export default SearchProducts;
