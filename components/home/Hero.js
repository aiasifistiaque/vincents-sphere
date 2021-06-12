import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Hero = () => {
	const router = useRouter();
	return (
		<div className='home-hero'>
			<h1>Vincent’s Sphere</h1>
			<h2>Handcrafted Happiness for all...</h2>
			<div
				className='hero-action-button'
				onClick={() => router.push('/explore')}>
				<p>Explore</p>
			</div>
		</div>
	);
};

export default Hero;
