import React from 'react';
import Link from 'next/link';
import useGetProfile from '../../hooks/useGetProfile';
import Loading from '../Loading';
import { LongButton } from '..';
import { useRouter } from 'next/router';

const MyProfile = () => {
	const { user, loading } = useGetProfile();
	const router = useRouter();
	if (loading) return <Loading />;
	return (
		<div className='my-profile'>
			<h3>Profile</h3>
			<h5>{user.name}</h5>
			<p>Email: {user.email}</p>
			<p>Role: {user.role}</p>
			<p>Phone: {user.phone || 'Not set'}</p>
			<div style={{ margin: '1em 0' }}>
				<LongButton onClick={() => router.push('/editprofile')}>
					Edit Profile
				</LongButton>
			</div>

			{user.role == 'admin' && (
				<Link href='/admin'>
					<div className='admin-panel-button'>
						<p>Go to admin panel</p>
					</div>
				</Link>
			)}
		</div>
	);
};

export default MyProfile;
