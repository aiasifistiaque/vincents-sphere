import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

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
						icon={item.icon}
						className='footer-icons'
						onClick={() => window.open(item.to)}
					/>
				))}
			</div>
		</div>
	);
};

export default FooterSectionIcons;
