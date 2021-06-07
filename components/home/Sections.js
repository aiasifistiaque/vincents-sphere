import React, { useRef } from 'react';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Loading from '../Loading';
import useGetCategoryProducts from '../../hooks/useGetCategoryProducts';
import ProductsOnDisplay from './ProductsOnDisplay';
import EndSectionPlaceHolder from './EndSectionPlaceHolder';

const Sections = ({ section }) => {
	const scrollRef = useRef(null);
	const scrollDist = 280;

	const { products, loading } = useGetCategoryProducts(section.name);

	const scroll = scrollOffset => {
		scrollRef.current.scrollLeft += scrollOffset;
	};

	if (loading) return <Loading />;

	return (
		<div className='home-sections'>
			<div className='home-section-headers'>
				<h3>{section.title}</h3>
				<h4>{section.subtitle}</h4>
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
					{products.map((product, i) =>
						i < 5 ? (
							<ProductsOnDisplay product={product} key={i} />
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
					<EndSectionPlaceHolder length={products.length} />
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

export default Sections;
