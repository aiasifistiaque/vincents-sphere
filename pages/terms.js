import React from 'react';
import Page from '../components/Page';

const terms = () => {
	return (
		<Page title='Terms of Use'>
			<div className='terms'>
				<h1>SHOP RULES</h1>
				<h3>Replacement and Return Policy :</h3>
				<p>
					If there is any damage during delivery, we will replace it within 3-4
					days. We will offer a replacement if only the product is faulty. But
					you must check in front of the delivery man and let us know about it
					while he is at your doorstep. Otherwise, no change will be accepted
					once the delivery man is gone.
				</p>
				<h3> Order Cancellation </h3>
				<p>
					We usually dispatch the products within one day of confirmation. Think
					twice before ordering because no cancellation will be accepted after
					24 hours. If you don't take the product after dispatching then we will
					be bound to take some actions against you. Or at least you have to
					communicate with us about it.
				</p>
				<h3>Product Holding</h3>
				<p>
					If you want us to dispatch your parcel a couple of days later then let
					us know right away while placing the order. But we can not hold the
					parcel for more than 3 days. There will be exceptions according to our
					stock and we will let you know in that case.
				</p>
				<h3>Payments</h3>
				<p>
					Both COD and Bkash payments are accepted. You have to choose one while
					placing the order. If you choose to pay through Bkash, add the 2%
					bkash charge with your total amount and clear the payment before we
					dispatch. We will knock you while we are dispatching your parcel.
				</p>
			</div>
		</Page>
	);
};

export default terms;
