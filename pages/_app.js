import React, { useEffect } from 'react';
import '../styles/style.scss';
import { Provider } from 'react-redux';
import store from '../store';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	const handleRouteChange = url => {
		window.gtag('config', 'G-9SJ0WWVELQ', {
			page_path: url,
		});
	};

	useEffect(() => {
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
