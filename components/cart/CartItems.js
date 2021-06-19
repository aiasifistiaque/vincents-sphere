import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import CartIsEmptyText from './CartIsEmptyText';
import CartItemCheckout from './CartItemCheckout';
import { general } from '../../constants';
import HeadingText from '../texts/HeadingText';

const CartItems = ({ checkout }) => {
	const { cartItems } = useSelector(state => state.cart);

	const [totalPrice, setTotalPrice] = useState(0);
	const [length, setLength] = useState(0);

	useEffect(() => {
		let total = 0;
		let len = 0;
		cartItems.map(x => (total += x.price));
		setTotalPrice(total);
		cartItems.map(x => (len += x.qty));
		setLength(len);
	}, [cartItems]);

	if (cartItems.length < 1) return <CartIsEmptyText />;
	else if (checkout)
		return (
			<>
				<HeadingText h={5}>Items: {length}</HeadingText>
				<HeadingText>
					Total Price: {general.takaSymbol} {totalPrice}
				</HeadingText>
				{cartItems.map((item, i) => (
					<CartItemCheckout product={item} key={item.product} index={i} />
				))}
			</>
		);
	else
		return (
			<>
				{cartItems.map((item, i) => (
					<CartItem product={item} key={item.product} index={i} />
				))}
			</>
		);
};

export default CartItems;
