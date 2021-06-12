import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import { api } from '../constants';
import axios from 'axios';
import ExploreSelect from '../components/explore/ExploreSelect';
import ExplorePageMain from '../components/explore/ExplorePageMain';

const explore = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);
	const [sort, setSort] = useState('newest');

	useEffect(() => {
		page == 0 && setLoading(true);
		axios
			.post(`${api.explore}`, { page: page, sort: sort }, api.config)
			.then(res => {
				let newProducts = [];
				if (products.length > 0) {
					newProducts = products.concat(res.data.products);
				} else {
					newProducts = res.data.products;
				}

				setProducts(newProducts);
				setLoading(false);
				setPage(res.data.page);
			})
			.catch(function (error) {
				setLoading(false);
				console.log(error.message);
			});
	}, [page, sort]);

	return (
		<Page>
			<div className='explore-page'>
				<div>
					<h3>Explore</h3>
					<h5>Page: {page + 1}</h5>
				</div>

				<ExploreSelect
					sort={sort}
					onChange={e => {
						setPage(0);
						setProducts([]);
						setLoading(true);
						setSort(e.target.value);
					}}
				/>
			</div>

			<ExplorePageMain
				loading={loading}
				products={products}
				onLoadMore={() => setPage(page + 1)}
			/>
		</Page>
	);
};

export default explore;
