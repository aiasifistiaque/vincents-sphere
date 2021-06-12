import React from 'react';

const AdminSort = ({ children, sortData, value, setValue }) => {
	return (
		<div className='admin-sort'>
			<div>{children}</div>
			<Sort data={sortData} value={value} setValue={e => setValue(e)} />
		</div>
	);
};

const Sort = ({ value, setValue, data }) => {
	return (
		<select
			className='custom-select'
			value={value}
			onChange={e => {
				setValue(e.target.value);
			}}>
			{data.map((option, i) => (
				<option key={i} value={option}>
					Sort: {option}
				</option>
			))}
		</select>
	);
};

export default AdminSort;
