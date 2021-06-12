import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ShareIcon from './ShareIcon';

const ViewMoreIconSection = ({ product }) => {
	return (
		<div className='v-pc-icon-contaner'>
			<div style={{ display: 'flex' }}>
				<FontAwesomeIcon
					icon={faHeart}
					className={fav ? 'v-pc-icons favd' : 'v-pc-icons'}
				/>
				<ShareIcon className='v-pc-icons' product={product} />
			</div>
			<FontAwesomeIcon icon={faChevronRight} className='v-pc-icons' />
		</div>
	);
};

export default ViewMoreIconSection;
