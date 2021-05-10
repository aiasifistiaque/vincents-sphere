import React, { useRef } from 'react';
import Image from 'next/image';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sizes } from '../../constants';

const Sections = ({ section }) => {
	const scrollRef = useRef(null);
	const scrollDist = 350;

	const scroll = scrollOffset => {
		scrollRef.current.scrollLeft += scrollOffset;
	};

	return (
		<div className='home-sections'>
			<h3>{section.title}</h3>
			<h4>{section.subtitle}</h4>
			<div className='section-arrows'>
				<div onClick={() => scroll(-scrollDist)} className='arrows'>
					<FontAwesomeIcon icon={faChevronLeft} style={{ height: 50 }} />
				</div>

				<div className='section-container' ref={scrollRef}>
					{section.products.map((product, i) => (
						<>
							<ProductsOnDisplay key={i} product={product} />
							<ProductsOnDisplay key={i} product={product} />
						</>
					))}
				</div>
				<div className='arrows' onClick={() => scroll(scrollDist)}>
					<FontAwesomeIcon icon={faChevronRight} style={{ height: 50 }} />
				</div>
			</div>
		</div>
	);
};

const ProductsOnDisplay = ({ product }) => {
	return (
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
	);
};

export default Sections;
