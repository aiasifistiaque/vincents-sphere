import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Page from '../../components/Page';
import { dummyItem } from '../../data';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import getAProduct from '../../store/actions/productActions/getAProduct';
import Loading from '../../components/Loading';
import { addToCart } from '../../store/actions/cartActions/cartActions';
import ProdQtyButton from '../../components/product/ProdQtyButton';

const Product = () => {
	const router = useRouter();
	const [item, setItem] = useState({});
	const [itemPresent, setItemPresent] = useState(false);
	const [addLoading, setAddLoading] = useState(true);

	const { id } = router.query;

	const dispatch = useDispatch();

	const { product, loading } = useSelector(state => state.getAProduct);
	const { cartItems } = useSelector(state => state.cart);

	useEffect(() => {
		if (id != undefined) dispatch(getAProduct(id));
	}, [id]);

	console.log(cartItems);

	useEffect(() => {
		const index = cartItems.findIndex(item => item.product === id);
		if (index == -1) {
			setItemPresent(false);
			setAddLoading(false);
		} else {
			const item = cartItems[index];
			setItem(item);
			setItemPresent(true);
			setAddLoading(false);
		}
	}, [cartItems, id]);

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
						{addLoading ? (
							<p>loading</p>
						) : itemPresent ? (
							<ProdQtyButton product={product}>{item.qty}</ProdQtyButton>
						) : (
							<ProdPageButton title='Add to Cart' product={product} />
						)}
						{
							// <div
							// className='delete-from-cart'
							// onClick={() => dispatch(removeFromCart(id))}>
							// <p>Delete</p>
							// </div>
						}
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

export default Product;
