import React from 'react';
import Page from '../components/Page';
import Hero from '../components/home/Hero';
import Sections from '../components/home/Sections';
import { sectionData } from '../data';
import Consult from '../components/home/Consult';
import { categories } from '../constants';

export default function Home() {
	return (
		<Page>
			<Hero />
			{categories.map((category, i) => (
				<Sections section={category} key={i} />
			))}

			<Consult />
		</Page>
	);
}
