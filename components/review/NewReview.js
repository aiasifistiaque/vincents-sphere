import React, { useState } from 'react';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import Loading from '../Loading';
import { useRouter } from 'next/router';
import { LongButton } from '..';
import ReviewInputs from './ReviewInputs';

const NewReview = ({ product }) => {
	const { loading, isLoggedIn } = useIsLoggedIn();
	const router = useRouter();
	if (loading) return <Loading />;
	if (!isLoggedIn) {
		return (
			<div>
				<p>log in to write a review</p>
				<LongButton onClick={() => router.push('/login')}>Log in</LongButton>
			</div>
		);
	} else return <ReviewInputs product={product} />;
};

export default NewReview;
