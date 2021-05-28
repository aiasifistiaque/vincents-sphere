import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sizes } from '../../constants';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading';
import Page from '../Page';
import getCategoryProduct from '../../store/actions/productActions/getCategoryProduct';
import useGetCategoryProducts from '../../hooks/useGetCategoryProducts';

const Sections = ({ section }) => {
	const scrollRef = useRef(null);
	const scrollDist = 350;

	const { products, loading } = useGetCategoryProducts(section.name);

	const scroll = scrollOffset => {
		scrollRef.current.scrollLeft += scrollOffset;
	};

	if (loading) return <Loading />;

	return (
		<div className='home-sections'>
			<h3>{section.title}</h3>
			<h4>{section.subtitle}</h4>
			<div className='section-arrows'>
				<div onClick={() => scroll(-scrollDist)} className='arrows'>
					<FontAwesomeIcon icon={faChevronLeft} className='arrow-icon' />
				</div>

				<div className='section-container' ref={scrollRef}>
					{products.map((product, i) =>
						i < 5 ? (
							<ProductsOnDisplay product={product} />
						) : (
							i == 5 && (
								<Link href={`cat/${section.name}`}>
									<div className='view-more'>
										<h3>View More</h3>
									</div>
								</Link>
							)
						)
					)}
				</div>
				<div className='arrows' onClick={() => scroll(scrollDist)}>
					<FontAwesomeIcon icon={faChevronRight} className='arrow-icon' />
				</div>
			</div>
		</div>
	);
};

const ProductsOnDisplay = ({ product }) => {
	return (
		<Link href={`/product/${product._id}`}>
			<div className='section-card'>
				<Image
					src={product.image}
					alt={product.name}
					width={sizes.displayCard.width}
					height={sizes.displayCard.height}
				/>
				<h6>{product.name}</h6>
				<p>{product.size}</p>
			</div>
		</Link>
	);
};

export default Sections;
