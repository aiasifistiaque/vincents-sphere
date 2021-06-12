import React from 'react';
import Head from 'next/head';

const ProductPageMeta = ({ product }) => {
	return (
		<Head>
			<title>{product.name}</title>
			<link rel='icon' href='/favicon.ico' />
			<meta property='og:image' content={product.image} />
			<meta property='title' content={product.title} key='title' />
			<meta property='og:title' content={product.title} key='title' />
			<meta name='og:description' content={product.description} />
			<meta name='description' content={product.description} />
		</Head>
	);
};

export default ProductPageMeta;
