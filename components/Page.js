import React, { useState } from 'react';
import Head from 'next/head';
import Footer from './footer/Footer';
import BNavbar from './nav/BNavbar';
import Search from './Search';

const Page = ({ children, title }) => {
	const [searchActive, setSearchActive] = useState(false);

	return (
		<div>
			<Head>
				<title>{title || "Vincent's Sphere"}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content="Vincent's Sphere" key='title' />

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
				<Footer />
			</main>
		</div>
	);
};

export const LoadingPage = ({ children }) => {
	return <div className='page'>{children}</div>;
};

export const ProductPage = ({ children, title }) => {
	const [searchActive, setSearchActive] = useState(false);

	return (
		<div>
			<BNavbar
				searchActive={searchActive}
				searchOn={() => setSearchActive(true)}
				searchOff={() => setSearchActive(false)}
			/>
			<Search active={searchActive} off={() => setSearchActive(false)} />

			<div onClick={() => setSearchActive(false)}>
				<div className='page'>{children}</div>
				<Footer />
			</div>
		</div>
	);
};

export default Page;
