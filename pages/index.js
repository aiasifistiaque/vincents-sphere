import React from 'react';
import Page from '../components/Page';
import Hero from '../components/home/Hero';
import Sections from '../components/home/Sections';
import Consult from '../components/home/Consult';
import { categories } from '../constants';
import GiftSectionUpdated from '../components/home/GiftSectionUpdated';
import Story from '../components/home/Story';
import SectionTitle from '../components/home/SectionTitle';

export default function Home() {
	return (
		<Page title="Vincent's Sphere | Home">
			<Hero />

			<br />
			<Story />

			<SectionTitle>Featured</SectionTitle>
			{categories.map((category, i) => (
				<Sections section={category} key={i} />
			))}
			<GiftSectionUpdated />
			<Consult />
		</Page>
	);
}
