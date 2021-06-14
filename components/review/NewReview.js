import React, { useState } from 'react';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import Loading from '../Loading';
import { useRouter } from 'next/router';
import { LongButton } from '..';
import ReviewInputs from './ReviewInputs';

const NewReview = ({
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
	const user = useIsLoggedIn();
	const router = useRouter();
	if (user.loading) return <Loading />;
	if (!user.isLoggedIn) {
		return (
			<div>
				<p>log in to write a review</p>
				<LongButton onClick={() => router.push('/login')}>Log in</LongButton>
			</div>
		);
	} else
		return (
			<ReviewInputs
				product={product}
				value={value}
				loading={loading}
				success={success}
				alreadyReviewed={alreadyReviewed}
				postReview={postReview}
				star={star}
				setStar={e => setStar(e)}
				setValue={e => setValue(e)}
			/>
		);
};

export default NewReview;
