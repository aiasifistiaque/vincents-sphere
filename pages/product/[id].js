import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Page from '../../components/Page';
import { dummyItem } from '../../data';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import getAProduct from '../../store/actions/productActions/getAProduct';
import Loading from '../../components/Loading';
import { addToCart } from '../../store/actions/cartActions/cartActions';

const Product = () => {
	const router = useRouter();
	const { id } = router.query;
	const dispatch = useDispatch();
	const { product, loading } = useSelector(state => state.getAProduct);

	useEffect(() => {
		if (id != undefined) dispatch(getAProduct(id));
	}, [id]);

	if (loading) return <Loading />;

	return (
		<Page>
			<div className='page-product'>
				<Image
					src={product.image || dummyItem.image}
					alt={product.name}
					width={600}
					height={600}
				/>
				<div className='product-details'>
					<h1>{product.name}</h1>

					<h4>{product.size}</h4>
					<h5>Notes: {product.note}</h5>
					<hr />
					<p>{product.description}</p>
					<h2>{product.price} BDT</h2>
					<div className='prod-page-button-container'>
						<QuantityButton title='Quantity' />
						<ProdPageButton title='Add to Cart' product={product} />
					</div>
				</div>
			</div>
		</Page>
	);
};

const ProdPageButton = ({ title, fun, product }) => {
	const dispatch = useDispatch();

	return (
		<div
			className='prod-page-button'
			onClick={() => dispatch(addToCart(product, 1))}>
			<p>{title}</p>
		</div>
	);
};

const QuantityButton = ({ title, fun }) => {
	return (
		<div className='prod-page-button'>
			<p>{title}</p>
		</div>
	);
};

export default Product;
