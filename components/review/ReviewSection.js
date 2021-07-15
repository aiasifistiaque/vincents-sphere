import React, { useState } from 'react';
import { TextButton } from '..';
import NewReview from './NewReview';
import ReviewStar from './ReviewStar';
import Image from 'next/image';
import axios from 'axios';
import { api } from '../../constants';
import getUnixToDate from '../../functions/unixToDate';

const ReviewSection = ({ product }) => {
	//const total = product.numReviews;
	const [write, setWrite] = useState(false);
	//console.log(product);

	const [thisProduct, setThisProduct] = useState(product);
	const [total, setTotal] = useState(product.numReviews);

	const [value, setValue] = useState('');
	const [star, setStar] = useState(1);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [alreadyReviewed, setAlreadyReviewed] = useState(false);

	const postReview = () => {
		if (loading) return;
		setLoading(true);
		const token = JSON.parse(localStorage.getItem('vincenttoken'));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		axios
			.put(
				api.review,
				{ rating: star, comment: value, id: product._id },
				config
			)
			.then(res => {
				//console.log('success', res.data);
				setThisProduct(res.data.product);
				setTotal(res.data.product.numReviews);
				setSuccess(true);
				setLoading(false);
			})
			.catch(e => {
				console.log(e.response.data);
				if (e.response.data == 'Product Already Reviewed') {
					setAlreadyReviewed(true);
				}
				setLoading(false);
			});
	};

	return (
		<div className='review-section'>
			<h2>Ratings</h2>
			<p className='num-review-text' style={{ fontWeight: '600' }}>
				{thisProduct.numReviews} Reviews
			</p>
			<ReviewStar stars={thisProduct.rating} />
			{!write && (
				<TextButton onClick={() => setWrite(true)}>
					Write a Customer Review
				</TextButton>
			)}

			{write && (
				<NewReview
					product={product}
					value={value}
					loading={loading}
					success={success}
					alreadyReviewed={alreadyReviewed}
					postReview={postReview}
					setValue={e => setValue(e)}
					setStar={e => setStar(e)}
				/>
			)}

			{total == 0 ? (
				<div className='no-reviews-yet'>
					<p>No Reviews Posted Yet</p>
				</div>
			) : (
				<div style={{ margin: '2em 1em' }}>
					<h4>Customer Reviews</h4>
					{thisProduct.reviews &&
						thisProduct.reviews
							.reverse()
							.map((review, i) => (
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
				<Image
					unoptimized={true}
					src='/reviewpp.png'
					alt='review'
					height={30}
					width={30}
				/>
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
