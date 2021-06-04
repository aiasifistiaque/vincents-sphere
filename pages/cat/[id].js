import React, { useEffect, useState } from 'react';
import Page from '../../components/Page';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/Loading';
import { useRouter } from 'next/router';
import getCategoryProduct from '../../store/actions/productActions/getCategoryProduct';
import CatProductsOnDIsplay from '../../components/cat/CatProductsOnDIsplay';
import { categories } from '../../constants';

const cat = () => {
	const dispatch = useDispatch();
	const [cat, setCat] = useState({});

	const router = useRouter();
	const { id } = router.query;

	const getProducts = useSelector(state => state.categoryProduct);
	const { products, loading, error } = getProducts;

	useEffect(() => {
		if (id != undefined) {
			dispatch(getCategoryProduct(id));
			if (id == 'Candles') setCat(categories[0]);
			else if (id == 'Bathsalt') setCat(categories[1]);
			else if (id == 'Satin Mask') setCat(categories[2]);
			else if (id == 'Satin Scrunchie') setCat(categories[3]);
			else if (id == 'Dream Catcher') setCat(categories[4]);
		}
	}, [id]);

	if (loading) return <Loading />;

	return (
		<Page>
			<div className='category-page'>
				<h1>{cat.title}</h1>
				<h4>{cat.subtitle}</h4>
			</div>

			<div className='all-products'>
				{products.map((product, i) => (
					<CatProductsOnDIsplay key={i} product={product} />
				))}
			</div>
		</Page>
	);
};

export default cat;
