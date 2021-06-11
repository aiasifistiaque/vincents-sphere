import React, { useState } from 'react';
import { LongButton } from '..';
import axios from 'axios';
import { api, backendFile } from '../../constants';
import Router from 'next/router';
import { CustomInput, CustomUpload, CustomTextArea } from './CustomInputs';

const AddNewProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState();
	const [size, setSize] = useState();
	const [notes, setNotes] = useState('');
	const [description, setDescription] = useState('');
	const [stock, setStock] = useState();
	const [image, setImage] = useState();
	const [category, setCategory] = useState('');
	const [loading, setLoading] = useState(false);

	const addPressed = async () => {
		if (loading) return;
		setLoading(true);
		const token = JSON.parse(localStorage.getItem('vincenttoken'));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		if (name.length < 1) return;

		const file = image.target.files[0];

		const formData = new FormData();
		formData.append('image', file);

		try {
			const img = await axios.post(api.upload, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			if (img) {
				const { data } = await axios.post(
					`${api.products}/createproduct`,
					{
						name,
						price,
						size,
						notes,
						description,
						countInStock: stock,
						image: `${backendFile}${img.data}`,
						category,
						status: 'hidden',
					},
					config
				);
				if (data) {
					Router.push(`/adproduct/${data._id}`);
					setLoading(false);
				}
			}
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};

	return (
		<div className='add-product'>
			<div className='ad-prod-header'>
				<h3>Add New Product</h3>
			</div>

			<CustomInput value={name} setValue={e => setName(e)}>
				Name
			</CustomInput>
			<CustomInput value={price} setValue={e => setPrice(e)} type='number'>
				Price
			</CustomInput>
			<CustomInput value={category} setValue={e => setCategory(e)}>
				Category
			</CustomInput>
			<CustomUpload value={image} setValue={e => setImage(e)}>
				Image
			</CustomUpload>
			<CustomTextArea value={notes} setValue={e => setNotes(e)} rows='3'>
				Notes
			</CustomTextArea>
			<CustomTextArea
				value={description}
				setValue={e => setDescription(e)}
				rows='10'>
				Description
			</CustomTextArea>
			<CustomInput value={size} setValue={e => setSize(e)} type='number'>
				Size
			</CustomInput>
			<CustomInput value={stock} setValue={e => setStock(e)} type='number'>
				Stock count
			</CustomInput>
			<div className='ad-prod-header'>
				<LongButton onClick={addPressed}>
					{loading ? 'Loading...' : 'Create'}
				</LongButton>
			</div>
		</div>
	);
};

export default AddNewProduct;
