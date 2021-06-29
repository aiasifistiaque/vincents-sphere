import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { api } from '../../constants';
import { CustomButton, CancelButton } from '..';
import getAProduct from '../../store/actions/productActions/getAProduct';

const ProductEdit = ({ product, cancel }) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState(product.name);
	const [status, setStatus] = useState(product.status);
	const [size, setSize] = useState(product.size);
	const [category, setCategory] = useState(product.category);
	const [subCategory, setSubCategory] = useState(product.subCategory);
	const [description, setDescription] = useState(product.description);
	const [note, setNote] = useState(product.note);
	const [stock, setStock] = useState(product.countInStock);
	const [price, setPrice] = useState(product.price);

	const onSave = async () => {
		setLoading(true);
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: JSON.parse(localStorage.getItem('vincenttoken')),
			},
		};
		try {
			const { data } = await axios.put(
				`${api.products}/${product._id}`,
				{
					name,
					size,
					description,
					category,
					subCategory,
					note,
					stock,
					price,
					status,
				},
				config
			);
			if (data) {
				dispatch(getAProduct(product._id));
				cancel();
			} else {
				colsole.log(data);
			}
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div className='admin-product-edit'>
			<label>Edit Product Name</label>
			<input type='text' value={name} onChange={e => setName(e.target.value)} />
			<label>Edit Size</label>
			<input type='text' value={size} onChange={e => setSize(e.target.value)} />
			<label>Notes</label>
			<textarea
				type='text'
				rows='3'
				value={note}
				onChange={e => setNote(e.target.value)}
			/>
			<hr />
			<label>Edit Product Category</label>
			<input
				type='text'
				value={category}
				onChange={e => setCategory(e.target.value)}
			/>
			<label>Edit Product Sub Category</label>
			<input
				type='text'
				value={subCategory}
				onChange={e => setSubCategory(e.target.value)}
			/>
			<label>Description</label>
			<textarea
				type='text'
				rows='10'
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>
			<label>Stock</label>
			<input
				type='number'
				value={stock}
				onChange={e => setStock(e.target.value)}
			/>
			<label>Price</label>
			<input
				type='number'
				value={price}
				onChange={e => setPrice(e.target.value)}
			/>

			<label>Status</label>
			<select
				className='custom-select'
				value={status}
				onChange={e => {
					setStatus(e.target.value);
				}}>
				<option value='hidden'>Hidden</option>
				<option value='visible'>Visible</option>
				<option value='archived'>Archived</option>
			</select>

			<div style={{ display: 'flex', margin: '1em 0' }}>
				{loading ? (
					<CustomButton onClick={() => {}}>loading...</CustomButton>
				) : (
					<>
						<CustomButton onClick={onSave}>Save</CustomButton>
						<CancelButton onClick={cancel}>Cancel</CancelButton>
					</>
				)}
			</div>
		</div>
	);
};

export default ProductEdit;
