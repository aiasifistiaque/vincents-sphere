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
import changeProductPictureAction from '../../store/actions/productActions/changeProductPictureAction';
import NetworkErrorPage from '../../components/error/NetworkErrorPage';

const adproduct = () => {
	const router = useRouter();
	const [edit, setEdit] = useState(false);
	const { id } = router.query;
	const dispatch = useDispatch();
	const { product, loading, error } = useSelector(state => state.getAProduct);
	const [change, setChange] = useState(false);
	const [image, setImage] = useState();
	const [pageLoading, setPageLoading] = useState(false);
	const [thisProduct, setThisProduct] = useState({});

	useEffect(() => {
		setPageLoading(true);
		if (id != undefined) dispatch(getAProduct(id));
	}, [id]);

	useEffect(() => {
		if (!loading && !error) {
			setThisProduct(product);
			setEdit(false);
			setChange(false);
			setPageLoading(false);
			setImage();
		}
	}, [loading]);

	const changePic = () => {
		dispatch(changeProductPictureAction(product._id, image));
	};

	if (pageLoading) return <Loading />;

	if (error) return <NetworkErrorPage />;

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
					{loading ? (
						<h2>Processing...</h2>
					) : (
						<Image
							src={
								thisProduct.image ||
								'/dream catcher/handmade Dream Catcher price 500 taka.jpg'
							}
							alt={thisProduct.name}
							width={400}
							height={350}
							className='v-image'
						/>
					)}

					<div style={{ margin: '1em 0' }}>
						{change ? (
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
								}}>
								<CustomUpload value={image} setValue={e => setImage(e)}>
									Select Picture
								</CustomUpload>

								<CustomButton onClick={!loading && changePic}>
									{!loading ? 'Change' : 'loading...'}
								</CustomButton>

								<CancelButton onClick={() => setChange(false)}>
									Cancel
								</CancelButton>
							</div>
						) : (
							<LongButton onClick={() => setChange(true)}>
								Change Photo
							</LongButton>
						)}
					</div>
				</div>

				{edit ? (
					<ProductEdit product={thisProduct} cancel={() => setEdit(false)} />
				) : (
					<AdminProductDetails product={thisProduct} />
				)}
			</div>
		</AdminPageLayout>
	);
};

export default adproduct;
