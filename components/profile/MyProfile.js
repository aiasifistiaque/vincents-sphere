import React from 'react';
import Link from 'next/link';
import useGetProfile from '../../hooks/useGetProfile';
import Loading from '../Loading';

const MyProfile = () => {
	const { user, loading } = useGetProfile();
	if (loading) return <Loading />;
	return (
		<div className='my-profile'>
			<h3>profile</h3>
			<h5>{user.name}</h5>
			<p>{user.email}</p>
			<p>Role: {user.role}</p>
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
