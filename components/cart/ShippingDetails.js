import React from 'react';
import HeadingText from '../texts/HeadingText';
import ShadowContainerVertical from '../buttons/ShadowContainerVertical';
import { TextButton, LongButton } from '..';
import { useRouter } from 'next/router';

const ShippingDetails = ({ shipping }) => {
	const router = useRouter();
	return (
		<ShadowContainerVertical>
			<HeadingText h={4} margin='0 0 1em 0'>
				Shipping Details
			</HeadingText>

			<p>
				Address: {shipping.address}, {shipping.city}, {shipping.postalCode}
			</p>

			<h6>Phone: {shipping.phone}</h6>
			<TextButton onClick={() => router.replace('/checkout')}>
				Change Address
			</TextButton>
		</ShadowContainerVertical>
	);
};

export default ShippingDetails;
