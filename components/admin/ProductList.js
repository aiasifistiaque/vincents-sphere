import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading';
import getAllProducts from '../../store/actions/productActions/getAllProducts';
import Router from 'next/router';

const ProductList = () => {
	const dispatch = useDispatch();

	const getProducts = useSelector(state => state.getAllProducts);
	const { products, loading, error } = getProducts;

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	if (loading) return <Loading />;

	return (
		<div className='my-orders'>
			<h3>ALL Products</h3>
			<p>Total Orders: {products.length}</p>
			{products.length == 0 ? (
				<p>no current products</p>
			) : (
				<table className='order-table'>
					<tbody>
						<tr style={{ border: '1px solid rgba(0,0,0,.1)', height: 10 }}>
							<td>name</td>
							<td>price</td>
							<td>category</td>
							<td>stock</td>
							<td>detail</td>
						</tr>

						{products.map((product, i) => (
							<tr
								key={i}
								style={{ border: '1px solid rgba(0,0,0,.1)', height: 10 }}>
								<td>{product.name}</td>
								<td>Tk. {product.price}</td>
								<td>{product.category}</td>
								<td>{product.countInStock}</td>
								<td
									style={{ color: 'dodgerblue', cursor: 'pointer' }}
									onClick={() => Router.push(`/adproduct/${product._id}`)}>
									Detail
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default ProductList;
