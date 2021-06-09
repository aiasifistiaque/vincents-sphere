import React, { useState } from 'react';
import Head from 'next/head';

import Search from './Search';
import AdminFooter from './admin/AdminFooter';
import ANavBar from './nav/ANavBar';

const AdminPage = ({ children, title }) => {
	const [searchActive, setSearchActive] = useState(false);

	return (
		<div>
			<Head>
				<title>A D M I N</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ANavBar
				searchActive={searchActive}
				searchOn={() => setSearchActive(true)}
				searchOff={() => setSearchActive(false)}
			/>
			<Search active={searchActive} off={() => setSearchActive(false)} />

			<main onClick={() => setSearchActive(false)}>
				<div className='page'>{children}</div>
			</main>
			<AdminFooter />
		</div>
	);
};

export default AdminPage;
