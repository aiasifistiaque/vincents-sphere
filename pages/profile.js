import React from 'react';
import Page from '../components/Page';
import MyProfile from '../components/profile/MyProfile';
import MyOrdersUpdated from '../components/profile/MyOrdersUpdated';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import PageNotFound from '../components/error/PageNotFound';
import Loading from '../components/Loading';

const profile = () => {
	const { loading, isLoggedIn } = useIsLoggedIn();
	if (loading) return <Loading />;
	else if (!isLoggedIn) return <PageNotFound />;

	return (
		<Page title='Profile'>
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
