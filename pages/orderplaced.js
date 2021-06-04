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
					flex: 1,
					margin: '15vh 4%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}>
				<h2 style={{ margin: '.5em' }}>Order has been placed successfully</h2>
				<Link href='/'>
					<div className='login-button'>
						<p>Go back</p>
					</div>
				</Link>
			</div>
		</Page>
	);
};

export default orderplaced;
