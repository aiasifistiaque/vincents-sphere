import React from 'react';
import { footerData } from '../../data/footerData';
import FooterSections from './FooterSections';
import FooterSectionIcons from './FooterSectionIcons';

const FooterLinkSection = () => {
	return (
		<div className='footer-link-section'>
			{footerData.map((data, i) => (
				<FooterSections data={data} key={i} />
			))}
			<FooterSectionIcons />
		</div>
	);
};

export default FooterLinkSection;
