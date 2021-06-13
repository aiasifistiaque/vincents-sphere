import React from 'react';
import { ProductPage } from '../components/Page';
import Image from 'next/image';
import { CustomButton, LongButton } from '../components';

const boxes = [
	{
		title: 'MOTHER’S DAY SPECIAL 2021',
		products: [
			'Best Mom Ever Scented Candle',
			'Lavender Bath Salt',
			'Chocolates',
			'Dream Catcher',
			'Satin Mask',
			'Sheet Mask',
		],
	},
	{
		title: "WOMEN'S DAY SPECIAL BOX 2021",
		products: [
			'Who Runs The World/ Girls Just Wanna Have Fun Scented Candles',
			'Lavender Bath Salt',
			'Satin Scrunchies',
			'Satin Mask',
			'Sheet Mask',
			'Hand Cream',
		],
	},
	{
		title: 'VALENTINES DAY SPECIAL BOX 2021',
		products: [
			'Scented Candle of your choice',
			'Bath Salt of your choice',
			'Satin mask',
			'Satin Scrunchies',
			'Brownies',
			'Pinata Heart',
			'Chocolate Coated Cookies',
		],
	},
	{
		title: 'READYMADE GIFT BOXES',
		products: [
			'Scented Candle of your choice',
			'Bath Salt of your choice',
			'Satin mask',
			'Satin Scrunchies',
			'Sheet Mask',
			"Victoria's Secret Mist",
			'Dream Catcher',
			'Reversible Octo Plushie',
		],
	},
];

const giftbox = () => {
	return (
		<ProductPage>
			<div className='page-product'>
				<div className='product-image'>
					<Image
						src='/giftbox/Womens Day Special.jpg'
						alt="Women's Day Special"
						width={600}
						height={500}
						className='product-image-item v-image'
					/>
				</div>

				<div className='product-details'>
					<h1>Gift Box</h1>

					<h5 style={{ fontWeight: '400' }}>Note: Personalized Gift Boxes</h5>
					<p style={{ margin: 0, padding: 0 }}>
						For the very special occasions
					</p>
					<p>
						Even the most perfect gift isn't quite as special without the proper
						presentation. Vincent's Sphere Personalized Gift Boxes is a
						collection of carefully curated, thematic gift boxes. Whether it’s
						for a birthday, big day or just because; we combine the best
						products so that each gift tells a story and lets you gift with
						intention. Our gift boxes can be used to spice up any present. Lined
						with our coloured or printed tissue paper, and topped off with a
						beautiful satin ribbon bow, you will be sure to present a beautiful
						gift to your friends and family. But please do give us a message and
						ask for further details. Please note that all our box are
						customizable.
					</p>
					<hr />
					{boxes.map((box, i) => (
						<div style={{ margin: '1.5em 0' }} key={i}>
							<h6>{box.title}</h6>
							{box.products.map((prod, i) => (
								<p key={i} style={{ margin: 0, padding: 0, fontSize: '.9em' }}>
									{prod}
								</p>
							))}
						</div>
					))}
					<LongButton
						onClick={() =>
							window.open('https://www.facebook.com/vincentssphere')
						}>
						More Details
					</LongButton>
				</div>
			</div>
		</ProductPage>
	);
};

export default giftbox;
