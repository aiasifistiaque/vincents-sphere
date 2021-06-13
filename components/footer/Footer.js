import React from 'react';
import FooterAddressSection from './FooterAddressSection';
import FooterLinkSection from './FooterLinkSection';

const Footer = () => {
	return (
		<div className='footer-full'>
			<div className='footer'>
				<FooterAddressSection />
				<FooterLinkSection />
			</div>

			{/* <div className='thinkcrypt'>
				<p>
					Designed and Developed by{' '}
					<a href='https://thinkcrypt.io'>thinkcrypt.io</a>
				</p>
			</div> */}

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
