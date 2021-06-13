import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProductPage } from '../../components/Page';
import { dummyItem } from '../../data';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import getAProduct from '../../store/actions/productActions/getAProduct';
import PageLoading from '../../components/PageLoading';
import ProductSection from '../../components/product/ProductSection';
import PictureFullScreen from '../../components/product/PictureFullScreen';
import ProductDetailsUpdated from '../../components/product/ProductDetailsUpdated';
import UpdatedProductDetails from '../../components/product/UpdatedProductDetails';
import Head from 'next/head';

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
		<ProductPage title={product.name}>
			<Head>
				<meta property='og:title' content={product.name} key='title' />
			</Head>
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
					<ProductDetailsUpdated
						product={product}
						itemPresent={itemPresent}
						addLoading={addLoading}
						item={item}
					/>
				</div>
				<UpdatedProductDetails product={product} />
			</div>

			<ProductSection category={product.category} id={product._id} />
		</ProductPage>
	);
};

export default Product;
