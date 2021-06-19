import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const data = [
	{
		name: 'Facebook',
		icon: faFacebookSquare,
		to: 'https://www.facebook.com/vincentssphere',
	},
	{
		name: 'Instagram',
		icon: faInstagram,
		to: 'https://www.instagram.com/vincentsphere/',
	},
];

const FooterSectionIcons = () => {
	return (
		<div className='footer-section-icons'>
			<h5>Social</h5>
			<div className='footer-icons-container'>
				{data.map((item, i) => (
					<FontAwesomeIcon
						key={i}
						icon={item.icon}
						className='footer-icons'
						height={30}
						onClick={() => window.open(item.to)}
					/>
				))}
			</div>
		</div>
	);
};

export default FooterSectionIcons;
