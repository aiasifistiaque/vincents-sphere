import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProductPage } from '../../components/Page';
import { dummyItem } from '../../data';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import getAProduct from '../../store/actions/productActions/getAProduct';
import PageLoading from '../../components/PageLoading';
import ProdQtyButton from '../../components/product/ProdQtyButton';
import ProductSection from '../../components/product/ProductSection';
import {
	ProdFavButton,
	ProdPageButton,
} from '../../components/product/ProdButtons';
import { general } from '../../constants';
import PictureFullScreen from '../../components/product/PictureFullScreen';

const Product = () => {
	const router = useRouter();
	const [item, setItem] = useState({});
	const [itemPresent, setItemPresent] = useState(false);
	const [addLoading, setAddLoading] = useState(true);
	const [openPic, setOpenPic] = useState(false);

	const { id } = router.query;
	const dispatch = useDispatch();

	const { product, loading } = useSelector(state => state.getAProduct);
	const { cartItems } = useSelector(state => state.cart);

	useEffect(() => {
		if (id != undefined) dispatch(getAProduct(id));
	}, [id]);

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

	if (loading) return <PageLoading />;

	return (
		<ProductPage>
			{
				//<ProductMeta product={product} />
			}

			<PictureFullScreen
				open={openPic}
				close={() => setOpenPic(false)}
				product={product}
			/>

			<div className='page-product'>
				<div className='product-image'>
					<Image
						src={product.image || dummyItem.image}
						alt={product.name}
						width={600}
						height={500}
						className='product-image-item v-image'
						onClick={() => setOpenPic(true)}
					/>
				</div>

				<div className='product-details'>
					<ProductDetails product={product} />

					<div className='prod-page-button-container'>
						{addLoading ? (
							<p>loading</p>
						) : itemPresent ? (
							<ProdQtyButton product={product}>{item.qty}</ProdQtyButton>
						) : (
							<ProdPageButton title='Add to Cart' product={product} />
						)}
						<ProdFavButton product={product} />
					</div>
				</div>
			</div>

			<ProductSection category={product.category} />
		</ProductPage>
	);
};

const ProductDetails = ({ product }) => {
	return (
		<>
			<h1>{product.name}</h1>
			<h4>Size: {product.size}</h4>
			<h5>Notes: {product.note}</h5>
			<hr />
			<p>{product.description}</p>
			<h2>
				Price: {general.takaSymbol}
				{product.price}
			</h2>
		</>
	);
};

export default Product;
