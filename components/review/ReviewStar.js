import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ReviewStar = ({ product, stars }) => {
	const findIcon = pos => {
		if (stars >= pos) {
			return faStar;
		} else if (stars < pos && stars > pos - 1) {
			return faStarHalfAlt;
		} else {
			return farStar;
		}
	};

	return (
		<div className='review-star-container'>
			<FontAwesomeIcon icon={findIcon(1)} height={20} className='str-icn' />
			<FontAwesomeIcon icon={findIcon(2)} height={20} className='str-icn' />
			<FontAwesomeIcon icon={findIcon(3)} height={20} className='str-icn' />
			<FontAwesomeIcon icon={findIcon(4)} height={20} className='str-icn' />
			<FontAwesomeIcon icon={findIcon(5)} height={20} className='str-icn' />
		</div>
	);
};

export default ReviewStar;
