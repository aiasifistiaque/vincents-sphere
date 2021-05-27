import React, { useEffect, useState } from 'react';

function useGetCart() {
	const [length, setLength] = useState(0);
	const [loading, setLoading] = useState(true);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const handleChangeStorage = () => {
			const items = JSON.parse(localStorage.getItem('vincentcart'));
			setCartItems(() => items);

			if (items)
				if (!items) {
					setTotalPrice(() => 0);
					setLoading(() => false);
					setLength(0);
				} else {
					let price = 0;
					items.map(item => (price = price + item.price));
					setTotalPrice(() => price.toFixed(2));
					setLoading(() => false);
					setLength(() => items.length);
				}
		};

		handleChangeStorage();

		window.addEventListener('storage', handleChangeStorage);

		return () => window.removeEventListener('storage', handleChangeStorage);
	}, []);

	return { cartItems, totalPrice, length, loading };
}

export default useGetCart;
