import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { api } from '../constants';
import SearchProducts from './search/SearchProducts';
import SearchLoading from './search/SearchLoading';
import AdminSearchSelect from './search/AdminSearchSelect';
import {
	ResOrderById,
	ResProductById,
	ResUserById,
	ResUserByMail,
} from './search/AdminSearchResult';
import SearchProductContainer from './search/SearchProductContainer';

const AdminSearch = ({ active, off }) => {
	const variants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 1, y: '-100%' },
	};

	const [searchString, setSearchString] = useState('');
	const [selectValue, setSelectValue] = useState('order by id');
	const [showResult, setShowResult] = useState('none');

	const onSearchPress = () => {
		setShowResult(selectValue);
	};

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
				active ? 'a-search-panel panel-visible' : 'a-search-panel panel-hidden'
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
					className='a-search-bar-input'
				/>

				<AdminSearchSelect
					selectValue={selectValue}
					setSelectValue={e => setSelectValue(e)}
				/>

				<div className='a-search-bar-button' onClick={onSearchPress}>
					<FontAwesomeIcon icon={faSearch} className='search-icon-dd' />
				</div>
			</div>

			<ResSection search={searchString} showResult={showResult} />
		</motion.div>
	);
};

const ResSection = ({ showResult, search }) => {
	if (showResult == 'none') return null;
	else if (showResult == 'order by id') return <ResOrderById id={search} />;
	else if (showResult == 'product by id') return <ResProductById id={search} />;
	else if (showResult == 'user by id') return <ResUserById id={search} />;
	else if (showResult == 'user by email') return <ResUserByMail id={search} />;
};

export default AdminSearch;
