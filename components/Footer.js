import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import FooterSectionIcons from './nav/FooterSectionIcons';

const footerData = [
	{
		header: 'Navigation',
		items: [
			{
				name: 'Home',
				to: '/',
			},
			{
				name: 'About',
				to: '/about',
			},
			{
				name: 'Contact',
				to: '/contact',
			},
		],
	},
	{
		header: 'Legal',
		items: [
			{
				name: 'Privacy Policy',
				to: '/privacy',
			},
			{
				name: 'Terms of Service',
				to: '/terms',
			},
		],
	},
];

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

const FooterSections = ({ data }) => {
	return (
		<div className='footer-sections'>
			<h5>{data.header}</h5>
			{data.items.map((item, i) => (
				<Link href={item.to || '/'}>
					<a key={i}>{item.name}</a>
				</Link>
			))}
		</div>
	);
};

export default Footer;
