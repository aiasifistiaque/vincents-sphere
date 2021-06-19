import Page, { LoadingPage } from '../components/Page';
import { useSelector } from 'react-redux';
import WishProducts from '../components/product/WishProducts';
import React, { useEffect, useState } from 'react';
import { api } from '../constants';
import axios from 'axios';

const wishlist = () => {
	//const { favItems } = useSelector(state => state.favItems);
	const [favItems, setFavItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem('vincenttoken'));

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};
		axios
			.get(api.getWish, config)
			.then(res => {
				setFavItems(res.data.wishlist);
				setLoading(false);
				setError(false);
			})
			.catch(e => {
				console.log(e);
				setLoading(false);
				setError(true);
			});
	}, []);

	if (loading) return <LoadingPage />;

	return (
		<Page title="Wishlist | Vincent's Sphere">
			<div className='explore-page'>
				<h1>Wishlist</h1>
			</div>

			<div className='all-products-explore'>
				{favItems.length == 0 ? (
					<h3>No items in list</h3>
				) : (
					favItems.map((id, i) => <WishProducts key={id} id={id} />)
				)}
			</div>
		</Page>
	);
};

export default wishlist;
