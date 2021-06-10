import React, { useState } from 'react';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminNavSearch = ({ active, on, off }) => {
	return (
		<div className='v-nav-search-bar'>
			<div className='search-nav' onClick={active ? off : on}>
				<span>{active ? 'Cancel' : 'Admin Search'}</span>
				<FontAwesomeIcon
					icon={active ? faTimes : faSearch}
					className='v-search-icon'
				/>
			</div>
		</div>
	);
};

export default AdminNavSearch;
