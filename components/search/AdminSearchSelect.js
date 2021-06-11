import React from 'react';

const AdminSearchSelect = ({ selectValue, setSelectValue }) => {
	return (
		<select
			className='a-search-select'
			value={selectValue}
			onChange={e => {
				setSelectValue(e.target.value);
			}}>
			<option value='order by id'>Order by ID</option>
			<option value='product by id'>Product by ID</option>
			<option value='user by id'>User by ID</option>
			<option value='user by email'>User by email</option>
		</select>
	);
};

export default AdminSearchSelect;
