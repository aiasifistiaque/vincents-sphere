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
} from './AdminListCard';
import AdminSort from './AdminSort';
import { productSort } from '../../data/sortData';
import { LongButton } from '..';

const ProductListUpdated = () => {
	const dispatch = useDispatch();
	const [sort, setSort] = useState('Newest');

	const getProducts = useSelector(state => state.getAllProducts);
	const { products, loading, error } = getProducts;

	useEffect(() => {
		dispatch(getAllProducts(sort));
	}, [dispatch, sort]);

	return (
		<div className='my-orders'>
			<AdminSort sortData={productSort} value={sort} setValue={e => setSort(e)}>
				<h3>All Products</h3>
				<p>Total Products: {products.length || 'LOADING...'}</p>
			</AdminSort>

			<div style={styles.adButtonContainer}>
				<LongButton onClick={() => Router.push('addproduct')}>
					Add Product
				</LongButton>
			</div>

			{loading ? (
				<Loading />
			) : products.length == 0 ? (
				<p>no current products</p>
			) : (
				<AdminListContainer>
					{products.map((product, i) => (
						<AdminListCard>
							<Image
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
							<AButton
								style={{ color: 'dodgerblue', cursor: 'pointer' }}
								onClick={() => Router.push(`/adproduct/${product._id}`)}>
								Details
							</AButton>
						</AdminListCard>
					))}
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
