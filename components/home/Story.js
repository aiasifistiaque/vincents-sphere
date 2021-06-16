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
					Hi, I am Mauli Rahman. I am a Business Student by choice and an Art
					Enthusiast by talent. Also, I am a scented candle freak. But scented
					candles were rare in Bangladesh. I remember buying candle-making kits
					and make some candles at home for myself and my friends & family. That
					is when I thought of turning my passion into a business
				</p>
				<p>
					At the end of 2019, I started my journey of Vincent's Sphere. I
					started small, only with 30 candles to be exact, and which sold out
					just within 2 days. Ever since then, there was no looking back. As we
					are growing, I got my two best friends on board with me to deal with
					the now increased workload. Flash forward to now, Vincents's Sphere is
					a full-fledged brand of Scented Candles, Skincare, and Handmade Goods
					loved by all.
				</p>
				<LongButton onClick={() => router.push('/about')}>
					Learn More
				</LongButton>
			</div>
		</div>
	);
};

export default Story;
