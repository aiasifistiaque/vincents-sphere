import React, { useState } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import BNavbar from './nav/BNavbar';
import { motion } from 'framer-motion';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Page = ({ children, title }) => {
	const [searchActive, setSearchActive] = useState(false);
	return (
		<div>
			<Head>
				<title>{title || 'Vincents Sphere'}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<BNavbar
				searchActive={searchActive}
				searchOn={() => setSearchActive(true)}
				searchOff={() => setSearchActive(false)}
			/>
			<SearchPanel active={searchActive} off={() => setSearchActive(false)} />

			<main className='page'>{children}</main>
			<Footer />
		</div>
	);
};

const SearchPanel = ({ active, off }) => {
	const variants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 1, y: '-100%' },
	};
	return (
		<motion.div
			animate={active ? 'open' : 'closed'}
			variants={variants}
			className={
				active ? 'search-panel panel-visible' : 'search-panel panel-hidden'
			}>
			<div className='sc-close-icon-c' onClick={off}>
				<FontAwesomeIcon icon={faTimes} className='sc-close-icon' />
			</div>
			<div class='sb-input-container'>
				<input type='text' placeholder='Search' className='search-bar-input' />
			</div>
		</motion.div>
	);
};

export const LoadingPage = ({ children }) => {
	return <main className='page'>{children}</main>;
};

export default Page;
