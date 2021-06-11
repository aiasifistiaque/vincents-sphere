import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { api } from '../constants';
import SearchProducts from './search/SearchProducts';
import SearchLoading from './search/SearchLoading';
import SearchProductContainer from './search/SearchProductContainer';

const Search = ({ active, off }) => {
	const variants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 1, y: '-100%' },
	};

	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [initial, setInitial] = useState(true);

	useEffect(() => {
		setProducts([]);

		if (searchString.length < 1) {
			setProducts([]);
			setInitial(true);
		}
		if (searchString.length > 0) {
			setInitial(false);

			setLoading(true);
			axios
				.post(`${api.search}`, { searchString: searchString }, api.config)
				.then(function (response) {
					console.log(response);
					setProducts(response.data.products);
					setLoading(false);
				})
				.catch(function (error) {
					setLoading(false);
				});
		}
	}, [searchString]);

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
		if (active) {
			inputRef.current.focus();
			setTimeout(function () {
				inputRef.current.focus();
			}, 50);
		}
	}, [active]);

	return (
		<motion.div
			animate={active ? 'open' : 'closed'}
			variants={variants}
			className={
				active ? 'search-panel panel-visible' : 'search-panel panel-hidden'
			}>
			<div className='sc-close-icon-c' onClick={off}>
				<FontAwesomeIcon icon={faTimes} className='sc-close-icon' />
			</div>

			<div className='sb-input-container'>
				<input
					autoFocus='true'
					ref={inputRef}
					type='text'
					value={searchString}
					onChange={e => setSearchString(e.target.value)}
					placeholder='S e a r c h'
					className='search-bar-input'
				/>

				{searchString.length < 1 ? (
					<div
						className='search-bar-button'
						onClick={() => {
							inputRef.current.focus();
						}}>
						<FontAwesomeIcon icon={faSearch} className='search-icon-dd' />
					</div>
				) : (
					<div
						className='search-bar-button'
						onClick={() => {
							setSearchString('');
							inputRef.current.focus();
						}}>
						<FontAwesomeIcon icon={faTimes} className='sc-close-icon' />
					</div>
				)}
			</div>

			{initial ? (
				<div className='spc-not-found'>Search for a product</div>
			) : loading ? (
				<SearchLoading />
			) : products.length < 1 ? (
				<div className='spc-not-found'>No Products Found</div>
			) : (
				<SearchProductContainer>
					{products.map((product, i) => (
						<SearchProducts product={product} key={i} />
					))}
				</SearchProductContainer>
			)}
		</motion.div>
	);
};

export default Search;
