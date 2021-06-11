import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminPageLayout from '../../components/admin/AdminPageLayout';
import { useSelector, useDispatch } from 'react-redux';
import getAProduct from '../../store/actions/productActions/getAProduct';
import Image from 'next/image';
import Loading from '../../components/Loading';
import { CustomButton, LongButton, CancelButton } from '../../components';
import HeadingContainer from '../../components/admin/HeadingContainer';
import ProductEdit from '../../components/admin/ProductEdit';
import AdminProductDetails from '../../components/admin/AdminProductDetails';
import { CustomInput, CustomUpload } from '../../components/admin/CustomInputs';

const adproduct = () => {
	const router = useRouter();
	const [edit, setEdit] = useState(false);
	const { id } = router.query;
	const dispatch = useDispatch();
	const { product, loading } = useSelector(state => state.getAProduct);
	const [change, setChange] = useState(false);
	const [image, setImage] = useState();

	useEffect(() => {
		if (id != undefined) dispatch(getAProduct(id));
	}, [id]);

	if (loading) return <Loading />;

	return (
		<AdminPageLayout>
			<HeadingContainer>
				<h1 style={{ fontSize: '.8em' }}>Product ID: {product._id}</h1>
				{!edit && (
					<CustomButton onClick={() => setEdit(true)}>Edit</CustomButton>
				)}
			</HeadingContainer>

			<div className='admin-product' style={{ padding: 0, margin: 0 }}>
				<div className='admin-product-image'>
					<Image
						src={product.image}
						alt={product.name}
						width={400}
						height={350}
						className='v-image'
					/>
					<div style={{ margin: '1em 0' }}>
						{/* {change ? (
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<CustomUpload value={image} setValue={e => setImage(e)}>
									Select
								</CustomUpload>
								<div style={{ margin: '1em 0 0 0' }}>
									<CustomButton>Change</CustomButton>
								</div>
								<CancelButton onClick={() => setChange(false)}>
									Cancel
								</CancelButton>
							</div>
						) : (
							<LongButton onClick={() => setChange(true)}>
								Change Photo
							</LongButton>
						)} */}
					</div>
				</div>

				{edit ? (
					<ProductEdit product={product} cancel={() => setEdit(false)} />
				) : (
					<AdminProductDetails product={product} />
				)}
			</div>
		</AdminPageLayout>
	);
};

export default adproduct;
