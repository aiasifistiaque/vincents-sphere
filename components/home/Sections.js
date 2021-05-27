import React, { useRef } from 'react';
import Image from 'next/image';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sizes } from '../../constants';
import Link from 'next/link';

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
					<FontAwesomeIcon icon={faChevronLeft} className='arrow-icon' />
				</div>

				<div className='section-container' ref={scrollRef}>
					{section.products.map((product, i) => (
						<>
							<ProductsOnDisplay key={i} product={product} />
							<ProductsOnDisplay key={i + 100} product={product} />
						</>
					))}
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
		<Link href='/product/1'>
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
