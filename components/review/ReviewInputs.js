import React from 'react';
import { LongButton } from '..';

const ReviewInputs = ({
	product,
	value,
	loading,
	success,
	alreadyReviewed,
	postReview,
	star,
	setStar,
	setValue,
}) => {
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
