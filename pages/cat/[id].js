import React, { useEffect } from 'react';
import Page from '../../components/Page';
import ProductCard from '../../components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import getAllProducts from '../../store/actions/productActions/getAllProducts';
import Loading from '../../components/Loading';
import { useRouter } from 'next/router';
import getCategoryProduct from '../../store/actions/productActions/getCategoryProduct';

const cat = () => {
	const dispatch = useDispatch();

	const router = useRouter();
	const { id } = router.query;

	const getProducts = useSelector(state => state.categoryProduct);
	const { products, loading, error } = getProducts;

	useEffect(() => {
		if (id != undefined) dispatch(getCategoryProduct(id));
	}, [id]);

	if (loading) return <Loading />;

	return (
		<Page>
			<div style={{ margin: '15vh 10% 0 10%' }}>
				<h1 style={{ margin: '20px 0', padding: 0, textAlign: 'center' }}>
					{id}
				</h1>
				<hr />
			</div>

			<div className='all-products'>
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</Page>
	);
};

export default cat;
