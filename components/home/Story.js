import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LongButton } from '../index';
import { useRouter } from 'next/router';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Story = () => {
	const [loc, setLoc] = useState('');
	useEffect(() => {
		setLoc(window.location.pathname);
	}, []);
	const router = useRouter();
	return (
		<div className='story-section'>
			<div className='story-image'>
				<Image
					unoptimized={true}
					alt={'Our Story'}
					src='/storyimage.jpeg'
					height={500}
					width={500}
					className='v-contain-image'
				/>
			</div>

			<div className='story-text'>
				<div>
					<h2>
						<span>lasdkjas</span>
					</h2>
					<h1>The Story of Vincent’s Sphere</h1>
				</div>

				<p>
					Mauli Rahman is currently a business student with a strong passion for
					art. After struggling to find high quality scented candles in
					Bangladesh, Mauli took it upon herself to hand craft scented candles
					for herself. What initially started off as making candles using
					candle-making kits for her friends, and family, quickly turned into a
					successful business!
				</p>
				<p>
					Vincent’s Sphere was brought to life in late 2019, starting off with
					merely 30 candles that sold out within 2 days! Ever since then, there
					was no looking back for Mauli and her new brand. As her business began
					to flourish due to high demands, she got two of her best friends to
					get on board to manage the increased influx of clients! Flash forward
					to the present, Vincent’s Sphere has made its name as a fully-fledged
					brand of divine scented candles, skincare, and other handmade goods
					cherished by many.
				</p>
				<LongButton onClick={() => router.push('/about')}>
					Learn More
				</LongButton>
			</div>
		</div>
	);
};

export default Story;
