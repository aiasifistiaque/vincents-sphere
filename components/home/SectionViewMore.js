import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SectionViewMore = ({ product }) => {
	const router = useRouter();
	return (
		<div
			style={{ backgroundImage: `url('${product.image}')` }}
			className='view-more-card'>
			<div
				className='view-more-inner'
				onClick={() => router.push(`/cat/${product.category}`)}>
				<p>
					View More <br /> {product.category}
				</p>
			</div>
		</div>
	);
};

export default SectionViewMore;
