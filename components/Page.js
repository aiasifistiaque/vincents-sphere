import React, { useState } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import BNavbar from './nav/BNavbar';
import Search from './Search';

const Page = ({ children, title }) => {
	const [searchActive, setSearchActive] = useState(false);

	return (
		<div>
			<Head>
				<title>{title || 'Vincents Sphere'}</title>
				<link rel='icon' href='/favicon.ico' />

				<script
					async
					defer
					crossorigin='anonymous'
					src='https://connect.facebook.net/en_US/sdk.js'></script>
			</Head>
			<BNavbar
				searchActive={searchActive}
				searchOn={() => setSearchActive(true)}
				searchOff={() => setSearchActive(false)}
			/>
			<Search active={searchActive} off={() => setSearchActive(false)} />

			<main onClick={() => setSearchActive(false)}>
				<div className='page'>{children}</div>
			</main>
			<Footer />
		</div>
	);
};

export const LoadingPage = ({ children }) => {
	return <main className='page'>{children}</main>;
};

export default Page;
