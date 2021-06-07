import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import CatProductsOnDIsplay from '../components/cat/CatProductsOnDIsplay';
import { api } from '../constants';
import PageLoading from '../components/PageLoading';
import ButtonLoading from '../components/ButtonLoading';
import axios from 'axios';
import ExploreProducts from '../components/product/ExploreProducts';
import Loading from '../components/Loading';

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

	//if (loading) return <PageLoading />;

	return (
		<Page>
			<div className='explore-page'>
				<h1>Explore</h1>
				<h4>Page: {page}</h4>
				<select
					class='custom-select'
					value={sort}
					onChange={e => {
						setPage(0);
						setProducts([]);
						setLoading(true);
						setSort(e.target.value);
					}}>
					<option
						value='nameAsc'
						className='optn'
						style={{ backgroundColor: 'red' }}>
						Sort: Name Asc
					</option>
					<option value='nameDec' className='optn'>
						Sort: Name Dsc
					</option>
					<option value='newest' className='optn'>
						Sort: Newest
					</option>
					<option value='oldest' className='optn'>
						Sort: Oldest
					</option>
				</select>
			</div>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className='all-products-explore'>
						{products.map((product, i) => (
							<ExploreProducts key={i} product={product} />
						))}
					</div>
					<div
						className='load-more-button'
						style={{
							width: 200,
							alignSelf: 'center',
							justifyContent: 'center',
						}}
						onClick={() => setPage(page + 1)}>
						{loading ? <ButtonLoading /> : <p>Load More</p>}
					</div>
				</>
			)}
		</Page>
	);
};

export default explore;
