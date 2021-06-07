import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const ShareIcon = ({ className, product }) => {
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
						title: product.name,
						caption: product.category,
						description: product.description || '',
						picture: product.image,
					},
					function (response) {}
				)
			}
		/>
	);
};

export default ShareIcon;
