import React, { useEffect } from 'react';
import Page from '../components/Page';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../store/actions/cartActions/cartActions';

const orderplaced = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(emptyCart());
	}, []);

	return (
		<Page>
			<div
				style={{
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}>
				<h2>Order has been placed successfully</h2>
				<Link href='/'>
					<div className='login-button'>
						<p>go back</p>
					</div>
				</Link>
			</div>
		</Page>
	);
};

export default orderplaced;
