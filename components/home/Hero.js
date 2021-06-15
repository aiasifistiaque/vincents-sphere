import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ProductWrapper from '../product/ProductWrapper';

const Hero = () => {
	const router = useRouter();
	return (
		<div className='home-hero'>
			<h1>Vincent’s Sphere</h1>
			<h2>Handcrafted Happiness for all...</h2>
			<Link href='/explore' passHref>
				<ProductWrapper>
					<div className='hero-action-button'>
						<p>Explore</p>
					</div>
				</ProductWrapper>
			</Link>
		</div>
	);
};

export default Hero;
