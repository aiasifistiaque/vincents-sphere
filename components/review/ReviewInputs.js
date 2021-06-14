import React, { useState, useEffect } from 'react';
import { LongButton } from '..';
import axios from 'axios';
import { api } from '../../constants';

const ReviewInputs = ({ product }) => {
	console.log(product);
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
				console.log(res);
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

	if (success)
		return (
			<div className='review-posted'>
				<p>Your review has been submitted. Thank you for your feedback. </p>
			</div>
		);

	if (alreadyReviewed)
		return (
			<div className='already-reviewed'>
				<p>You have already reviewed this product</p>
			</div>
		);

	return (
		<div className='review-inputs'>
			<div className='review-input-boxes'>
				<label>Rating</label>
				<select
					value={star}
					onChange={e => {
						setStar(e.target.value);
					}}>
					<option value={1}>1 - Poor</option>
					<option value={2}>2 - Fair</option>
					<option value={3}>3 - Good</option>
					<option value={4}>4 - Very Good</option>
					<option value={5}>5 - Excellect</option>
				</select>
				<label>Comment</label>
				<textarea
					type='text'
					className='v-custom-textarea'
					value={value}
					onChange={e => setValue(e.target.value)}
					rows='5'
				/>
				<LongButton onClick={postReview}>
					{loading ? 'loading...' : 'Submit'}
				</LongButton>
			</div>
		</div>
	);
};

export default ReviewInputs;
