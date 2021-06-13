import React, { useEffect, useState } from 'react';
import Page from '../../components/Page';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import getCategoryProduct from '../../store/actions/productActions/getCategoryProduct';
import CatProductsOnDIsplay from '../../components/cat/CatProductsOnDIsplay';
import { categories } from '../../constants';
import PageLoading from '../../components/PageLoading';
import LoadMoreButton from '../../components/explore/LoadMoreButton';
import EndOfResult from '../../components/explore/EndOfResult';

const cat = () => {
	const dispatch = useDispatch();
	const [cat, setCat] = useState({});
	const [page, setPage] = useState(0);
	const [end, setEnd] = useState(false);

	const router = useRouter();
	const { id } = router.query;

	const getProducts = useSelector(state => state.categoryProduct);
	const { products, loading, error } = getProducts;
	const [finalProducts, setFinalProducts] = useState([]);
	const [initialLoading, setInitialLoading] = useState(true);

	useEffect(() => {
		if (id != undefined) {
			dispatch(getCategoryProduct(id, page));
			if (id == 'Candles') setCat(categories[0]);
			else if (id == 'Bathsalt') setCat(categories[1]);
			else if (id == 'Satin Mask') setCat(categories[2]);
			else if (id == 'Satin Scrunchie') setCat(categories[3]);
			else if (id == 'Dream Catcher') setCat(categories[4]);
		}
	}, [id, page]);

	useEffect(() => {
		let newProducts = [];
		if (finalProducts.length > 0) {
			if (!loading && products.length == 0) {
				setEnd(true);
			}
			newProducts = finalProducts.concat(products);
			setFinalProducts(newProducts);
		} else {
			setFinalProducts(products);
			setInitialLoading(false);
		}
	}, [products]);

	if (initialLoading) return <PageLoading />;

	return (
		<Page>
			<div className='category-page'>
				<h1>{cat.title}</h1>
				<h4>{cat.subtitle}</h4>
				<p>Page: {page + 1}</p>
			</div>

			<div className='all-products'>
				{!error ? (
					finalProducts.map((product, i) => (
						<CatProductsOnDIsplay key={i} product={product} />
					))
				) : (
					<div>
						<p>Network Error, please reload</p>
					</div>
				)}
			</div>
			{end ? (
				<EndOfResult />
			) : (
				!error && (
					<LoadMoreButton loading={loading} onClick={() => setPage(page + 1)} />
				)
			)}
		</Page>
	);
};

export default cat;
