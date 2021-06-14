import React, { useState } from 'react';
import { TextButton } from '..';
import NewReview from './NewReview';
import ReviewStar from './ReviewStar';
import getUnixToDate from '../../../backend/functions/unixToDate';
import Image from 'next/image';

const ReviewSection = ({ product }) => {
	const total = product.numReviews;
	const [write, setWrite] = useState(false);
	console.log(product);

	return (
		<div className='review-section'>
			<h2>Ratings</h2>
			<p className='num-review-text' style={{ fontWeight: '600' }}>
				{product.numReviews} Reviews
			</p>
			<ReviewStar stars={product.rating} />
			{!write && (
				<TextButton onClick={() => setWrite(true)}>
					Write a Customer Review
				</TextButton>
			)}

			{write && <NewReview product={product} />}

			{total == 0 ? (
				<div className='no-reviews-yet'>
					<p>No Reviews Posted Yet</p>
				</div>
			) : (
				<div style={{ margin: '2em 1em' }}>
					<h4>Customer Reviews</h4>
					{product.reviews &&
						product.reviews.map((review, i) => (
							<ReviewItem review={review} key={review._id} />
						))}
				</div>
			)}
		</div>
	);
};

const ReviewItem = ({ review }) => {
	return (
		<div className='review-item-container'>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Image src='/reviewpp.png' height={30} width={30} />
				<h6>{review.name}</h6>
			</div>

			<ReviewStar stars={review.rating} size={20} />

			<p style={{ fontSize: '.6em' }}>
				Posted on: {getUnixToDate(review.createdAt)}
			</p>
			<p className='comment'>{review.comment}</p>
		</div>
	);
};

export default ReviewSection;
