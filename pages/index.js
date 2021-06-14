import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import Hero from '../components/home/Hero';
import Sections from '../components/home/Sections';
import Consult from '../components/home/Consult';
import { categories } from '../constants';
import GiftSectionUpdated from '../components/home/GiftSectionUpdated';
import Story from '../components/home/Story';
import SectionTitle from '../components/home/SectionTitle';
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Home() {
	const [wnd, setInd] = useState('');
	const [w, setw] = useState();
	useEffect(() => {
		function handleload() {
			typeof window != 'undefined' && setInd('windowset');
			typeof window != 'undefined' && setw(window.location.pathname);
		}
		window.addEventListener('load', handleload);
	}, []);
	return (
		<Page>
			<Hero />

			<br />

			<Story />

			<SectionTitle>Featured</SectionTitle>
			{wnd == 'windowset' && (
				<MessengerCustomerChat
					pageId='110218757538456'
					appId='777093836325354'
					htmlRef={w}
				/>
			)}
			<p>windot {wnd}</p>

			{categories.map((category, i) => (
				<Sections section={category} key={i} />
			))}

			<GiftSectionUpdated />
			<Consult />
		</Page>
	);
}
