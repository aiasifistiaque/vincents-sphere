import React from 'react';
import Page from '../components/Page';
import { teamMembers } from '../data/aboutData';
import Image from 'next/image';

const about = () => {
	return (
		<Page>
			<div className='about-page'>
				<OurTeam />
				<h3>About Us</h3>
				<p>
					Vincent's Sphere is your #1 stop for all kinds of Handcrafted Goodies.
				</p>
				<p>
					Vincent's Sphere is the brainchild of Mauli Rahman, an artist and an
					art enthusiast, and a long time admirer of the famous Dutch painter
					Vincent van Gogh. She founded Vincent's Sphere with the goal of
					sharing her arts & crafts with the world and expanding her horizons as
					an artist.
				</p>
				<p>Vincent's Sphere believes in CRAFTING HAPPINESS FOR ALL.</p>
				<p>
					Vincent's Sphere is best known for its exquisite collection of
					Handcrafted Scented Candles. They have by far the largest collection
					of the most exquisite fragrances & designs bordering on innovation.
				</p>
				<p>
					Soon afterwards, Vincent's Sphere started to increase their line of
					handcrafted products with the release of Bath Salts, Satin Masks &
					Scrunchies, Handmade Soaps & Scrubs, Dream Catchers, Patters Papers &
					many more.
				</p>
			</div>
		</Page>
	);
};

const OurTeam = () => {
	return (
		<div className='about-team'>
			{teamMembers.map((item, i) => (
				<div className='team-container'>
					<div className='team-image'>
						<Image
							src={item.image}
							height={200}
							width={200}
							className='team-img'
						/>
					</div>

					<h6>{item.name}</h6>
					<p>{item.post}</p>
				</div>
			))}
		</div>
	);
};

export default about;
