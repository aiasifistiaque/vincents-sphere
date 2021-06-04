import React from 'react';
import Page from '../components/Page';
import Hero from '../components/home/Hero';
import Sections from '../components/home/Sections';
import Consult from '../components/home/Consult';
import { categories } from '../constants';
import GiftSection from '../components/home/GiftSection';

export default function Home() {
	return (
		<Page>
			<Hero />
			{categories.map((category, i) => (
				<Sections section={category} key={i} />
			))}
			<GiftSection />
			<Consult />
		</Page>
	);
}
