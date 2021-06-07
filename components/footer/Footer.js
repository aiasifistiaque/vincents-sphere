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
			<div className='footer-c'>
				<p>Copyright © 2021, Vincent's Sphere | All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
