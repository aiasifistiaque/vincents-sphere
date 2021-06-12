import React from 'react';
import Link from 'next/link';

const SectionViewMore = ({ product }) => {
	return (
		<div
			style={{ backgroundImage: `url('${product.image}')` }}
			className='view-more-card'>
			<Link href={`/cat/${product.category}`}>
				<div className='view-more-inner'>
					<p>
						View More <br /> {product.category}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default SectionViewMore;
