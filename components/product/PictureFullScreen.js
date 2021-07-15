import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const PictureFullScreen = ({ open, close, product }) => {
	if (!open) return null;
	else
		return (
			<div className='picture-full-screen'>
				<div className='fs-close-icon-container' onClick={close}>
					<FontAwesomeIcon icon={faTimes} height={30} color='whitesmoke' />
				</div>
				<div className='image-fs-container'>
					<Image
						unoptimized={true}
						src={product.image || dummyItem.image}
						alt={product.name}
						width={600}
						height={600}
						className='img-full-screen'
					/>
				</div>
			</div>
		);
};

export default PictureFullScreen;
