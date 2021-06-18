import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import useGetProfile from '../hooks/useGetProfile';
import Loading from '../components/Loading';
import PageNotFound from '../components/error/PageNotFound';
import { LongButton } from '../components';
import axios from 'axios';
import { api } from '../constants';
import { useRouter } from 'next/router';
import AdminPanelButton from '../components/buttons/AdminPanelButton';

const editprofile = () => {
	const { user, loading, error } = useGetProfile();
	const router = useRouter();

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [btnLoading, setBtnLoading] = useState(false);

	useEffect(() => {
		if (!loading && !error) {
			setName(user.name);
			setPhone(user.phone);
			setEmail(user.email);
		}
	}, [loading]);

	const editUser = () => {
		setBtnLoading(true);
		const token = JSON.parse(localStorage.getItem('vincenttoken'));

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};

		if (loading) return;
		else {
			axios
				.put(api.editUser, { name: name, phone, phone }, config)
				.then(res => {
					router.push('/profile');
				})
				.catch(e => {
					console.log(e);
					setBtnLoading(false);
				});
		}
	};

	if (loading) return <Loading />;

	if (error) return <PageNotFound />;

	return (
		<Page title="Vincent's Sphere | Edit User Profile">
			<div className='edit-profile'>
				<div className='edit-pro-input-div'>
					<div
						style={{
							justifyContent: 'space-between',
							display: 'flex',
							alignItems: 'center',
							marginBottom: '1em',
						}}>
						<h4>Edit Profile</h4>
						<AdminPanelButton href='/editpassword'>
							Change Password
						</AdminPanelButton>
					</div>

					<label>Name</label>
					<input
						type='text'
						placeholder='Name'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className='edit-pro-input-div'>
					<label>Phone</label>
					<input
						type='number'
						placeholder='Phone'
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</div>
				<div className='edit-pro-input-div'>
					<label>Email</label>
					<input
						style={{ backgroundColor: '#fafafa', cursor: 'not-allowed' }}
						type='text'
						placeholder='Phone'
						value={email}
						disabled
						//onChange={e => setPhone(e.target.value)}
					/>
				</div>
				<div className='edit-pro-input-div'>
					<LongButton onClick={editUser}>
						{!btnLoading ? 'Save Changes' : 'Loading...'}
					</LongButton>
				</div>
			</div>
		</Page>
	);
};

export default editprofile;
