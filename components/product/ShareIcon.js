import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { frontend } from '../../constants';

const ShareIcon = ({ className, product }) => {
	const link = product.image;
	const size = '&w=828&q=75';
	const src = `${frontend}_next/image?url=%2F${product.image}${size}`;
	console.log(src);
	useEffect(() => {
		FB.init({
			appId: 777093836325354,
			autoLogAppEvents: true,
			xfbml: true,
			version: 'v10.0',
		});
	}, []);
	return (
		<FontAwesomeIcon
			icon={faShare}
			className={className}
			style={{ color: 'black' }}
			onClick={() =>
				FB.ui(
					{
						display: 'popup',
						method: 'share',
						href: `${window.location.href}/product/${product._id}`,
						hashtag: product.category,
					},
					function (response) {}
				)
			}
		/>
	);
};

export default ShareIcon;
