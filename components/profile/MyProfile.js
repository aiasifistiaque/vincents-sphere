import React from 'react';
import useGetProfile from '../../hooks/useGetProfile';
import Loading from '../Loading';
import { LongButton } from '..';
import AdminPanelButton from '../buttons/AdminPanelButton';
import { useRouter } from 'next/router';

const MyProfile = () => {
	const router = useRouter();
	const { user, loading } = useGetProfile();

	if (loading) return <Loading />;
	return (
		<div className='my-profile'>
			<h3>Profile</h3>

			<h5>{user.name}</h5>
			<p>Email: {user.email}</p>
			<p>Role: {user.role}</p>
			<p>Phone: {user.phone || 'Not set'}</p>

			<div
				style={{
					margin: '1em 0',
				}}>
				<LongButton onClick={() => router.push('/editprofile')}>
					Edit Profile
				</LongButton>
			</div>

			{user.role == 'admin' && (
				<AdminPanelButton href='/admin'>Go to admin panel</AdminPanelButton>
			)}
		</div>
	);
};

export default MyProfile;
