import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import AdminPageLayout from '../../components/admin/AdminPageLayout';
import AdUserProfile from '../../components/admin/AdUserProfile';
import AdUserOrders from '../../components/admin/AdUserOrders';
import { useSelector, useDispatch } from 'react-redux';
import getSingleUserAction from '../../store/actions/userActions/getSingleUserAction';
import editUserRoleAction from '../../store/actions/userActions/editUserRoleAction';

const aduser = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { id } = router.query;
	const [edit, setEdit] = useState(false);

	const { user, loading, orders, role } = useSelector(
		state => state.singleUser
	);

	useEffect(() => {
		dispatch(getSingleUserAction(id));
	}, [id]);

	const editUserRole = val => {
		dispatch(editUserRoleAction(user._id, val));
		setEdit(false);
	};

	if (loading) return <Loading />;

	return (
		<AdminPageLayout>
			<AdUserProfile
				user={user}
				edit={edit}
				onEdit={() => setEdit(true)}
				cancel={() => setEdit(false)}
				editUserRole={val => editUserRole(val)}
			/>
			<AdUserOrders orders={orders} />
		</AdminPageLayout>
	);
};

export default aduser;
