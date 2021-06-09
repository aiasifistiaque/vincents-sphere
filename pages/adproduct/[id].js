import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminPageLayout from '../../components/admin/AdminPageLayout';
import { useSelector, useDispatch } from 'react-redux';
import getAProduct from '../../store/actions/productActions/getAProduct';
import Image from 'next/image';
import Loading from '../../components/Loading';
import { general } from '../../constants';

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
			<h1 style={{ fontSize: '.8em', margin: '0 1em' }}>
				Product ID: {product._id}
			</h1>

			<div className='admin-product' style={{ padding: 0, margin: 0 }}>
				<div className='admin-product-image'>
					<Image
						src={product.image}
						alt={product.name}
						width={400}
						height={350}
					/>
				</div>

				<div className='admin-product-details'>
					<h1>{product.name}</h1>

					<h4>{product.size}</h4>
					<h5>Notes: {product.note}</h5>
					<hr />
					<p>{product.description}</p>
					<h2>
						Price: {general.takaSymbol}
						{product.price}
					</h2>
				</div>
			</div>
		</AdminPageLayout>
	);
};

export default adproduct;
