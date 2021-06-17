import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import useGetProfile from '../hooks/useGetProfile';
import Loading from '../components/Loading';
import NetworkError from '../components/NetworkError';
import { LongButton, SuccessText, ErrorText } from '../components';
import axios from 'axios';
import { api } from '../constants';
import { useRouter } from 'next/router';
import AdminPanelButton from '../components/buttons/AdminPanelButton';
import PageNotFound from '../components/error/PageNotFound';

const editprofile = () => {
	const { user, loading, error } = useGetProfile();
	const router = useRouter();

	const [err, setError] = useState(false);
	const [errorText, setErrorText] = useState('');

	const [success, setSuccess] = useState(false);
	const [successText, setSuccessText] = useState('');

	const [old, setOld] = useState('');
	const [newP, setNewP] = useState('');
	const [confirm, setConfirm] = useState('');
	const [btnLoading, setBtnLoading] = useState(false);

	const handleKeyPress = e => {
		if (e.code === 'Enter') {
			editUser();
		}
	};

	const editUser = () => {
		const token = JSON.parse(localStorage.getItem('vincenttoken'));

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};

		if (old.length < 1 || newP.length < 1 || confirm.length < 1) {
			setError(true);
			setErrorText('Field Values Missing');
		} else if (newP != confirm) {
			setError(true);
			setErrorText('Passwords Do Not Match');
		} else if (newP.length < 6) {
			setError(true);
			setErrorText('Password must be atleast 6 characters');
		} else {
			if (loading) return;
			else {
				setBtnLoading(true);

				axios
					.post(api.changePassword, { password: old, newpass: newP }, config)
					.then(res => {
						setSuccess(true);
						setSuccessText('Password Changed Successfully');
						//router.push('/profile');
						setBtnLoading(false);
						setError(false);
						setOld('');
						setNewP('');
						setConfirm('');
					})
					.catch(e => {
						setError(true);
						setErrorText(e.response.data);
						setBtnLoading(false);
						setOld('');
						setNewP('');
						setConfirm('');
					});
			}
		}
	};

	if (loading) return <Loading />;

	if (error) return <PageNotFound />;

	return (
		<Page>
			<div className='edit-profile'>
				<div className='edit-pro-input-div'>
					<div
						style={{
							justifyContent: 'space-between',
							display: 'flex',
							alignItems: 'center',
							marginBottom: '1em',
						}}>
						<h4>Change Password</h4>
						<AdminPanelButton href='/profile'>
							{success ? 'Go back' : 'Cancel'}
						</AdminPanelButton>
					</div>

					<label>Old Password</label>
					<input
						type='password'
						placeholder='Old Password'
						value={old}
						onKeyPress={e => handleKeyPress(e)}
						onChange={e => setOld(e.target.value)}
					/>

					<label>New Password</label>
					<input
						type='password'
						placeholder='New Password'
						value={newP}
						onKeyPress={e => handleKeyPress(e)}
						onChange={e => setNewP(e.target.value)}
					/>
					<label>Confirm Password</label>
					<input
						type='password'
						placeholder='Confirm Password'
						value={confirm}
						onKeyPress={e => handleKeyPress(e)}
						onChange={e => setConfirm(e.target.value)}
					/>
				</div>
				<div className='edit-pro-input-div'>
					{success && <SuccessText>{successText}</SuccessText>}
					{err && <ErrorText>{errorText}</ErrorText>}
					<LongButton onClick={editUser}>
						{!btnLoading ? 'Confirm' : 'Loading...'}
					</LongButton>
				</div>
			</div>
		</Page>
	);
};

export default editprofile;
