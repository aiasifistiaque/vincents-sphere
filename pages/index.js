import React, { useEffect } from 'react';
import Page from '../components/Page';
import Hero from '../components/home/Hero';
import Sections from '../components/home/Sections';
import Consult from '../components/home/Consult';
import { categories } from '../constants';
import GiftSectionUpdated from '../components/home/GiftSectionUpdated';
import Story from '../components/home/Story';
import SectionTitle from '../components/home/SectionTitle';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import { useDispatch } from 'react-redux';
import { resetFav } from '../store/actions/cartActions/cartActions';

export default function Home() {
	const { loading, isLoggedIn } = useIsLoggedIn();
	const dispatch = useDispatch();
	useEffect(() => {
		!loading && isLoggedIn && dispatch(resetFav());
	}, [loading]);
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
