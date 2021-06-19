import React from 'react';
import FooterAddressSection from './FooterAddressSection';
import FooterLinkSection from './FooterLinkSection';
import ScrollToTop from './ScrollToTop';
import Copyright from './Copyright';

const Footer = () => {
	return (
		<div className='footer-full'>
			<ScrollToTop />
			<div className='footer'>
				<FooterAddressSection />
				<FooterLinkSection />
			</div>
			<Copyright />
		</div>
	);
};

export default Footer;
