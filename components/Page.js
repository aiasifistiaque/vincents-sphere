import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from './footer/Footer';
import BNavbar from './nav/BNavbar';
import Search from './Search';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Page = ({ children, title }) => {
	const [searchActive, setSearchActive] = useState(false);

	useEffect(() => {
		window.fbAsyncInit = function () {
			FB.init({
				xfbml: true,
				version: 'v6.0',
			});
		};

		(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	}, []);

	return (
		<div>
			<Head>
				<title>{title || "Vincent's Sphere"}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<BNavbar
				searchActive={searchActive}
				searchOn={() => setSearchActive(true)}
				searchOff={() => setSearchActive(false)}
			/>

			<Search active={searchActive} off={() => setSearchActive(false)} />

			<main onClick={() => setSearchActive(false)}>
				<div className='page'>{children}</div>
				<div
					style={{
						display: 'flex',
						flex: 1,
						alignSelf: 'flex-end',
						padding: '0 4%',
						justifyContent: 'flex-end',
					}}>
					<h1>Messenger</h1>

					<MessengerCustomerChat
						pageId='110218757538456'
						appId='777093836325354'
						htmlRef={'https://vincentsphere.com'}
					/>
				</div>

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
			<Head>
				<title>{"Vincent's Sphere"}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
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
