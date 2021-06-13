import React from 'react';
import { useRouter } from 'next/router';

const AgreeTerms = () => {
	const router = useRouter();
	return (
		<div className='agree-signup-terms'>
			<p>
				By proceeding, you agree to our{' '}
				<span onClick={() => router.push('/terms')}>Terms of Use</span> and{' '}
				<span onClick={() => router.push('/privacy')}>Privacy Policy</span>
			</p>
		</div>
	);
};

export default AgreeTerms;
