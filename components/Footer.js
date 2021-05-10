import React from 'react';

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
				to: '/temrs',
			},
		],
	},
	{
		header: 'Social',
		items: [
			{ name: 'Facebook', to: '' },
			{ name: 'Instagram', to: '' },
		],
	},
];

const Footer = () => {
	return (
		<div className='footer'>
			<FooterAddressSection />
			<FooterLinkSection />
		</div>
	);
};

const FooterAddressSection = () => {
	return (
		<div className='footer-address-section'>
			<h3>Vinecnt's Sphere</h3>
			<p>phone: 0000000000</p>
			<p>email: vincent@gmail.com</p>
		</div>
	);
};

const FooterLinkSection = () => {
	return (
		<div className='footer-link-section'>
			{footerData.map((data, i) => (
				<FooterSections data={data} key={i} />
			))}
		</div>
	);
};

const FooterSections = ({ data }) => {
	return (
		<div className='footer-sections'>
			<h3>{data.header}</h3>
			{data.items.map((item, i) => (
				<a key={i}>{item.name}</a>
			))}
		</div>
	);
};

export default Footer;
