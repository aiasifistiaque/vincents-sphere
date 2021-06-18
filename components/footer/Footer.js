import React, { useRef } from 'react';
import FooterAddressSection from './FooterAddressSection';
import FooterLinkSection from './FooterLinkSection';
import Container from '../buttons/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../constants';

const Footer = () => {
	return (
		<div className='footer-full'>
			<Container bg='whitesmoke' padding='2em 4% 0 0' right>
				<FontAwesomeIcon
					icon={faChevronCircleUp}
					height={40}
					className='back-to-top-icon'
					onClick={() => window != undefined && window.scrollTo(0, 0)}
				/>
			</Container>
			<div className='footer'>
				<FooterAddressSection />
				<FooterLinkSection />
			</div>

			<div className='footer-c'>
				<p>
					Copyright © 2021, Vincent's Sphere | All rights reserved | Developed
					by <a href='http://thinkcrypt.io'>thinkcrypt.io</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
