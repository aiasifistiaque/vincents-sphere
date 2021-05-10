import React from 'react';
import Page from '../components/Page';
import Hero from '../components/home/Hero';
import Sections from '../components/home/Sections';
import { sectionData } from '../data';
import Consult from '../components/home/Consult';

export default function Home() {
	return (
		<Page>
			<Hero />
			<Sections section={sectionData.candles} />
			<Sections section={sectionData.bathsalt} />
			<Sections section={sectionData.satinscrunchies} />
			<Sections section={sectionData.satinmask} />
			<Consult />
		</Page>
	);
}
