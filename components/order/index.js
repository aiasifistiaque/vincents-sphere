import React from 'react';
import { general } from '../../constants';
import Link from 'next/link';
import TextLinkWrapper from '../texts/TextLinkWrapper';
export { OrderSummary } from './OrderSummary';

export const OrderDetails = ({ order, status, admin }) => {
	const shipping = order.shippingAddress;
	const address = `${shipping.address}, ${shipping.city}, ${shipping.postalCode}, ${shipping.country}`;
	return (
		<div className='order-details'>
			{status == 'new' && (
				<OrderItemContainer>
					<h3 style={{ textAlign: 'center', color: 'dodgerblue' }}>
						Order Successfully Placed
					</h3>
				</OrderItemContainer>
			)}
			<OrderItemContainer>
				<h3>Shipping</h3>
				<p>Name: {order.user.name}</p>
				<p>Email: {order.user.email}</p>
				<p>Phone: {shipping.phone}</p>

				<p>Address: {address}</p>
			</OrderItemContainer>

			<OrderItemContainer>
				<h3>Payment Method</h3>
				<p>Method: {order.paymentMethod}</p>
			</OrderItemContainer>
			<OrderItemContainer>
				<h3>Order Items</h3>
				{order.orderItems.map((item, i) =>
					admin ? (
						<AdminOrderDetailsItem item={item} i={i} />
					) : (
						<OrderDetailsItem item={item} i={i} />
					)
				)}
			</OrderItemContainer>
		</div>
	);
};

export const OrderItemContainer = ({ children }) => {
	return <div className='order-item-container'>{children}</div>;
};

export const AdminOrderDetailsItem = ({ item }) => {
	return (
		<div className='order-details-item'>
			<img src={item.image} width={50} height={50} />
			<LeftContainer flex={3}>
				<Link href={`/adproduct/${item.product}`} passHref>
					<TextLinkWrapper>
						<p style={{ margin: 0, padding: 0 }}>{item.name}</p>
					</TextLinkWrapper>
				</Link>
			</LeftContainer>
			<LeftContainer>
				<p style={{ margin: 0, padding: 0 }}>
					{general.takaSymbol}
					{item.price / item.qty} x {item.qty}
				</p>
			</LeftContainer>
		</div>
	);
};

export const OrderDetailsItem = ({ item }) => {
	return (
		<div className='order-details-item'>
			<img src={item.image} width={50} height={50} />
			<LeftContainer flex={3}>
				<Link href={`/product/${item.product}`} passHref>
					<TextLinkWrapper>
						<p style={{ margin: 0, padding: 0 }}>{item.name}</p>
					</TextLinkWrapper>
				</Link>
			</LeftContainer>
			<LeftContainer>
				<p style={{ margin: 0, padding: 0 }}>
					{general.takaSymbol}
					{item.price / item.qty} x {item.qty}
				</p>
			</LeftContainer>
		</div>
	);
};

export const PositiveBadge = ({ children }) => {
	return (
		<div className='positive-badge'>
			<p>{children}</p>
		</div>
	);
};

export const NegativeBadge = ({ children }) => {
	return (
		<div className='negative-badge'>
			<p>{children}</p>
		</div>
	);
};

export const LeftContainer = ({ children, flex }) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flex: flex || 1,
				margin: '0 10px',
			}}>
			{children}
		</div>
	);
};
