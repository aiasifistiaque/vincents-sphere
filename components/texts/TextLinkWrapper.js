import React from 'react';

const TextLinkWrapper = React.forwardRef(({ children, href, onClick }, ref) => {
	return (
		<a
			className='product-wrapper'
			href={href}
			ref={ref}
			onClick={onClick}
			className='text-link-wrapper'>
			{children}
		</a>
	);
});

export default TextLinkWrapper;
