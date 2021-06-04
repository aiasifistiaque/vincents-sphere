import React from 'react';
import Page from '../components/Page';
import MyProfile from '../components/profile/MyProfile';
import MyOrdersUpdated from '../components/profile/MyOrdersUpdated';

const profile = () => {
	return (
		<Page>
			<div className='profile-page'>
				<h3>My Profile</h3>
				<MyProfile />
				<br />
				<h3>My Orders</h3>
				<MyOrdersUpdated />
			</div>
		</Page>
	);
};

export default profile;
