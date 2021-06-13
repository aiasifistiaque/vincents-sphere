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
	const [end, setEnd] = useState(false);
	const [btnLoading, setBtnLoading] = useState(false);

	useEffect(() => {
		setBtnLoading(true);
		if (page == 0) {
			setLoading(true);
			setEnd(false);
		}
		axios
			.post(`${api.explore}`, { page: page, sort: sort }, api.config)
			.then(res => {
				if (res.data.products.length == 0) setEnd(true);
				let newProducts = [];
				if (products.length > 0) {
					newProducts = products.concat(res.data.products);
				} else {
					newProducts = res.data.products;
				}

				setProducts(newProducts);
				setLoading(false);
				setPage(res.data.page);
				setBtnLoading(false);
			})
			.catch(function (error) {
				setLoading(false);
				console.log(error.message);
				setBtnLoading(false);
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
				btnLoading={btnLoading}
				products={products}
				onLoadMore={() => setPage(page + 1)}
				end={end}
			/>
		</Page>
	);
};

export default explore;
