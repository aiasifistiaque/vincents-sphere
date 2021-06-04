import React, { useRef } from 'react';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../Loading';
import useGetCategoryProducts from '../../hooks/useGetCategoryProducts';
import ProductsOnDisplay from '../home/ProductsOnDisplay';

const ProductSection = ({ category }) => {
	const scrollRef = useRef(null);
	const scrollDist = 280;

	const { products, loading } = useGetCategoryProducts(category);

	const scroll = scrollOffset => {
		scrollRef.current.scrollLeft += scrollOffset;
	};

	if (loading) return <Loading />;

	return (
		<div className='home-sections'>
			<div style={{ display: 'flex', width: '92%' }}>
				<h3 style={{ textAlign: 'left' }}>Related Produts</h3>
			</div>

			<div className='section-arrows'>
				{products.length > 1 && (
					<div onClick={() => scroll(-scrollDist)} className='arrows'>
						<FontAwesomeIcon icon={faChevronLeft} className='arrow-icon' />
					</div>
				)}

				<div
					className={
						products.length > 1 ? 'section-container' : 'single-section'
					}
					ref={scrollRef}>
					{products.map(
						(product, i) => i < 5 && <ProductsOnDisplay product={product} />
					)}
					<div
						style={{
							margin: '0 50px',
							width: '10em',
						}}>
						<p style={{ color: 'transparent' }}>{'aslkd  '}</p>
						<br />
					</div>
				</div>
				{products.length > 1 && (
					<div className='arrows' onClick={() => scroll(scrollDist)}>
						<FontAwesomeIcon icon={faChevronRight} className='arrow-icon' />
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductSection;
