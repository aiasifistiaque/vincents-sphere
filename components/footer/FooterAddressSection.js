import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterAddressSection = () => {
	return (
		<div className='footer-address-section'>
			<h5>Vinecnt's Sphere</h5>
			<p>
				<FontAwesomeIcon icon={faPhoneAlt} className='v-footer-icon' />
				01312-795919
			</p>
			<a className='footer-mail' href='mailto:asifistiaque.ai@gmail.com'>
				<FontAwesomeIcon icon={faEnvelope} className='v-footer-icon' />
				rahman.mauli@gmail.com
			</a>
		</div>
	);
};

export default FooterAddressSection;
