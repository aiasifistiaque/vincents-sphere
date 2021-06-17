import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhoneAlt,
	faEnvelope as faEnvelopeAlt,
} from '@fortawesome/free-solid-svg-icons';

const FooterAddressSection = () => {
	return (
		<div className='footer-address-section'>
			<h5>Vincent's Sphere</h5>
			<p>
				<FontAwesomeIcon icon={faPhoneAlt} className='v-footer-icon' />
				01312-795919
			</p>
			<a className='footer-mail' href='mailto:support@vincentsphere.com'>
				<FontAwesomeIcon icon={faEnvelopeAlt} className='v-footer-icon' />
				support@vincentsphere.com
			</a>
		</div>
	);
};

export default FooterAddressSection;
