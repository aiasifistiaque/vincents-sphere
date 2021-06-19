import React from 'react';
import Page from '../components/Page';
import OurTeam from '../components/about/OurTeam';
import AboutSection from '../components/about/AboutSection';

const about = () => {
	return (
		<Page title="About | Vincent's Sphere">
			<div className='about-page'>
				<OurTeam />
				<AboutSection />
			</div>
		</Page>
	);
};

export default about;
