import React from 'react';

const ProductWrapper = React.forwardRef(({ children, href, onClick }, ref) => {
	return (
		<a className='product-wrapper' href={href} ref={ref} onClick={onClick}>
			{children}
		</a>
	);
});

export default ProductWrapper;
