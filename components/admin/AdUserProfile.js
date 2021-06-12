import React, { useState } from 'react';
import { LongButton, CustomButton, CancelButton } from '..';

const AdUserProfile = ({ user, edit, onEdit, cancel, editUserRole }) => {
	const [value, setValue] = useState(user.role);
	return (
		<div className='my-profile'>
			<h3>User Profile</h3>
			<p
				style={{
					wordBreak: 'break-word',
				}}>
				ID: {user._id}
			</p>
			<h5>Name: {user.name}</h5>
			<p
				style={{
					wordBreak: 'break-word',
				}}>
				Email: {user.email}
			</p>
			<p>Role: {user.role}</p>
			{!edit ? (
				<LongButton onClick={onEdit}>Change Role</LongButton>
			) : (
				<>
					<select
						className='order-select'
						value={value}
						onChange={e => {
							setValue(e.target.value);
						}}>
						<option value='user'>Make User</option>
						<option value='admin'>Make Admin</option>
						<option value='manager'>Make Manager</option>
					</select>
					<div style={{ margin: '1em 0' }}>
						<CustomButton onClick={() => editUserRole(value)}>
							Save
						</CustomButton>
						<CancelButton onClick={cancel}>Cancel</CancelButton>
					</div>
				</>
			)}
		</div>
	);
};
export default AdUserProfile;
