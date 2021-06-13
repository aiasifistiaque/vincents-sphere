import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { frontend } from '../../constants';
import { FacebookShareButton } from 'react-share';

const ShareIcon = ({ className, product }) => {
	const link = product.image;
	const size = '&w=828&q=75';
	const src = `${frontend}_next/image?url=%2F${product.image}${size}`;
	const url = `https://vincentsphere.com/product/${product._id}`;

	return (
		<FacebookShareButton url={url} size={35} description={product.description}>
			<FontAwesomeIcon
				icon={faShare}
				height={35}
				className={className}
				style={{ color: 'black' }}
			/>
		</FacebookShareButton>
	);
};

export default ShareIcon;
