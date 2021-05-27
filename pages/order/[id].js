import React from 'react';
import { useRouter } from 'next/router';
import useGetSingleOrder from '../../hooks/useGetSingleOrder';
import Page from '../../components/Page';
import Image from 'next/image';
import Loading from '../../components/Loading';

const order = () => {
	const router = useRouter();
	const { id } = router.query;
	const { order, loading } = useGetSingleOrder(id);
	if (loading) return <Loading />;
	return (
		<Page>
			<div className='order-details-page'>
				<div style={{ flex: 6 }}>
					<OrderDetails order={order} />
				</div>
				<div style={{ flex: 4 }}>
					<OrderSummary order={order} />
				</div>
			</div>
		</Page>
	);
};

const OrderDetails = ({ order }) => {
	const shipping = order.shippingAddress;
	const address = `${shipping.address}, ${shipping.city}, ${shipping.postalCode}, ${shipping.country}`;
	return (
		<div className='order-details'>
			<div>
				<h3>Shipping</h3>
				<p>Name: {order.user.name}</p>
				<p>Email: {order.user.email}</p>
				<p>Address: {address}</p>
			</div>

			<div>
				<h3>Payment Method</h3>
				<p>Method: {order.paymentMethod}</p>
			</div>
			<div>
				<h3>Order Items</h3>
				{order.orderItems.map((item, i) => (
					<OrderDetailsItem item={item} i={i} />
				))}
			</div>
		</div>
	);
};

const OrderDetailsItem = ({ item }) => {
	return (
		<div className='order-details-item'>
			<img src={item.image} width={50} height={50} />

			<p>{item.name}</p>

			<p>Tk. {item.price}</p>
		</div>
	);
};

const OrderSummary = ({ order }) => {
	return (
		<div className='order-summary'>
			<h3>Order Summary</h3>
			<p>Items: Tk. {order.totalPrice}</p>
			<p>VAT: Tk. {order.vat}</p>
			<p>Shipping: Tk. {order.shippingPrice}</p>
			<p>Total: Tk. {order.totalPrice}</p>
			{order.isPaid ? (
				<PositiveBadge>Paid</PositiveBadge>
			) : (
				<NegativeBadge>Not Paid</NegativeBadge>
			)}
			{order.isDelivered ? (
				<PositiveBadge>Delivered</PositiveBadge>
			) : (
				<NegativeBadge>Not Delivered</NegativeBadge>
			)}
		</div>
	);
};

const PositiveBadge = ({ children }) => {
	return (
		<div className='positive-badge'>
			<p>{children}</p>
		</div>
	);
};

const NegativeBadge = ({ children }) => {
	return (
		<div className='negative-badge'>
			<p>{children}</p>
		</div>
	);
};

export default order;
