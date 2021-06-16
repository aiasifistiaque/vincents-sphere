import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading';
import getAllProducts from '../../store/actions/productActions/getAllProducts';
import Router from 'next/router';
import Image from 'next/image';
import { general } from '../../constants';
import {
	AdminListCard,
	AdminListContainer,
	AText,
	AButton,
	ANButton,
} from './AdminListCard';
import AdminSort from './AdminSort';
import { productSort } from '../../data/sortData';
import { LongButton } from '..';
import NetworkError from '../NetworkError';
import LoadMoreSection from '../explore/LoadMoreSection';
import TotalCount from '../explore/TotalCount';

const ProductListUpdated = () => {
	const dispatch = useDispatch();
	const [sort, setSort] = useState('Newest');

	const getProducts = useSelector(state => state.getAllProducts);
	const { products, loading, error, count } = getProducts;

	const [page, setPage] = useState(0);
	const [end, setEnd] = useState(false);
	const [total, setTotal] = useState([]);

	useEffect(() => {
		dispatch(getAllProducts(sort, page));
	}, [dispatch, page, sort]);

	useEffect(() => {
		if (page == 0) {
			setEnd(false);
			setTotal([]);
		}
		let newOrders = [];
		if (total.length > 0 && page > 0) {
			newOrders = total.concat(products);
			setTotal(newOrders);
		} else {
			setTotal(products);
		}

		if (!loading && products.length == 0) setEnd(true);
	}, [products]);

	if (error) return <NetworkError />;

	return (
		<div className='my-orders'>
			<AdminSort
				sortData={productSort}
				value={sort}
				setValue={e => {
					setSort(e);
					setTotal([]);
					setPage(0);
				}}>
				<h3>All Products</h3>

				<p>
					Total Products:{' '}
					{loading ? 'LOADING...' : `${total.length} of ${count}`}
				</p>
			</AdminSort>

			<div style={styles.adButtonContainer}>
				<LongButton onClick={() => Router.push('addproduct')}>
					Add Product
				</LongButton>
			</div>

			{page == 0 && loading ? (
				<Loading />
			) : total.length == 0 ? (
				<p>no current products</p>
			) : (
				<AdminListContainer>
					{total.map((product, i) => (
						<AdminListCard key={i}>
							<Image
								alt={produce.name}
								src={product.image}
								height={100}
								width={100}
								className='v-image'
							/>

							<AText>{product.name}</AText>
							<AText>
								{general.takaSymbol}
								{product.price}
							</AText>
							<AText>{product.category}</AText>
							<AText>Stock: {product.countInStock}</AText>
							<ANButton href={`/adproduct/${product._id}`}>Details</ANButton>
						</AdminListCard>
					))}
					<div>
						<TotalCount item={total} loading={loading} count={count} />
						<LoadMoreSection
							onClick={() => setPage(page + 1)}
							loading={loading}
							end={end}
						/>
					</div>
				</AdminListContainer>
			)}
		</div>
	);
};

const styles = {
	adButtonContainer: {
		display: 'flex',
		marginBottom: '1em',
		justifyContent: 'flex-end',
	},
};

export default ProductListUpdated;
