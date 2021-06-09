import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useGetSingleOrder from '../../hooks/useGetSingleOrder';
import Loading from '../../components/Loading';
import AdminPageLayout from '../../components/admin/AdminPageLayout';
import { OrderDetails as OD, OrderSummary as OS } from '../../components/order';
import OrderEdit from '../../components/order/OrderEdit';
import axios from 'axios';
import { api } from '../../constants';

const adorder = () => {
	const router = useRouter();
	const { id } = router.query;
	const [reload, setReload] = useState(false);
	const { order, loading } = useGetSingleOrder(id, reload);
	const [edit, setEdit] = useState(false);
	const [value, setValue] = useState('');
	const [paid, setPaid] = useState();

	const editOrder = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: JSON.parse(localStorage.getItem('vincenttoken')),
			},
		};
		try {
			const { data } = await axios.put(
				api.order,
				{
					id: order._id,
					status: value || order.status,
					paid: paid || order.isPaid,
				},
				config
			);
			if (data) {
				setReload(!reload);
				setEdit(false);
			} else {
				colsole.log(data);
			}
		} catch (e) {
			console.log(e);
		}
	};

	if (loading) return <Loading />;

	return (
		<AdminPageLayout>
			<div className='order-details-page'>
				<div style={{ flex: 6 }}>
					<OD order={order} />
				</div>
				<div className='order-summary-edit'>
					{edit ? (
						<OrderEdit
							order={order}
							status={order.status}
							setSortValue={e => setValue(e)}
							paid={order.isPaid}
							setPaid={e => setPaid(e)}
						/>
					) : (
						<OS order={order} />
					)}

					{edit ? (
						<EditingButton
							cancelEdit={() => setEdit(false)}
							saveEdit={editOrder}
						/>
					) : (
						<EditButton setEdit={() => setEdit(true)} />
					)}
				</div>
			</div>
		</AdminPageLayout>
	);
};

const EditButton = ({ setEdit }) => {
	return (
		<div className='edit-order-button' onClick={setEdit}>
			<p>edit</p>
		</div>
	);
};

const EditingButton = ({ cancelEdit, saveEdit }) => {
	return (
		<>
			<div className='save-order-button' onClick={saveEdit}>
				<p>save</p>
			</div>
			<div className='cancel-order-button' onClick={cancelEdit}>
				<p>cancel</p>
			</div>
		</>
	);
};

export default adorder;
