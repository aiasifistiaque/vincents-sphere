import React from 'react';

const SectionTitle = ({ children }) => {
	return (
		<h2 className='featured-text'>
			<span>{children}</span>
		</h2>
	);
};

export default SectionTitle;
