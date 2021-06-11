import React from 'react';
import Link from 'next/link';

const SearchProductContainer = ({ children }) => {
	return <div className='search-prod-container'>{children}</div>;
};

export const SearchProductCard = ({ children, href }) => {
	return (
		<Link href={href || '/admin'}>
			<div className='search-prod-card'>{children}</div>
		</Link>
	);
};

export default SearchProductContainer;
