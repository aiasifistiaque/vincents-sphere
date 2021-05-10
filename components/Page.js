import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import NavBar from './nav/NavBar';

const Page = ({ children, title }) => {
	return (
		<div>
			<Head>
				<title>{title || 'Vincents Sphere'}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar />
			<main className='page'>{children}</main>
			<Footer />
		</div>
	);
};

export default Page;
