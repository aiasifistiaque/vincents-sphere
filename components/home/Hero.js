import React from 'react';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className='home-hero'>
			<h1>Vincent’s Sphere</h1>
			<h2>Handcrafted Happiness for all...</h2>
			<Link href='/explore'>
				<div className='hero-action-button'>
					<p>Explore</p>
				</div>
			</Link>
		</div>
	);
};

export default Hero;
