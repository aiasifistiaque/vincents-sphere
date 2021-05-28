import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminPageLayout from '../../components/admin/AdminPageLayout';
import { useSelector, useDispatch } from 'react-redux';
import getAProduct from '../../store/actions/productActions/getAProduct';
import Image from 'next/image';
import Loading from '../../components/Loading';

const adproduct = () => {
	const router = useRouter();
	const { id } = router.query;
	const dispatch = useDispatch();
	const { product, loading } = useSelector(state => state.getAProduct);

	useEffect(() => {
		if (id != undefined) dispatch(getAProduct(id));
	}, [id]);

	if (loading) return <Loading />;

	return (
		<AdminPageLayout>
			<div className='page-product' style={{ padding: 0, margin: 0 }}>
				<h2 style={{ marginBottom: 25 }}>Product id: {product._id}</h2>
				<Image
					src={product.image}
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
				</div>
			</div>
		</AdminPageLayout>
	);
};

export default adproduct;
