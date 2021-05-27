import React, { useEffect } from 'react';
import Page from '../components/Page';
import ProductCard from '../components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import getAllProducts from '../store/actions/productActions/getAllProducts';
import Loading from '../components/Loading';

const allproducts = () => {
	const dispatch = useDispatch();

	const getProducts = useSelector(state => state.getAllProducts);
	const { products, loading, error } = getProducts;

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	if (loading) return <Loading />;

	return (
		<Page>
			<div className='all-products'>
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</Page>
	);
};

export default allproducts;
