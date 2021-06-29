import React from 'react';
import Head from 'next/head';

const ProductPageMeta = ({ product }) => {
	return (
		<Head>
			<title>{product.name}</title>
			<link rel='icon' href={product.image} />
			<meta name='description' content={product.name} />
			<meta property='og:image' content={product.image} />
			<meta property='title' content={product.name} key='title' />
			<meta property='og:title' content={product.name} key='title' />
			<meta name='og:description' content={product.name} />
		</Head>
	);
};

export default ProductPageMeta;
