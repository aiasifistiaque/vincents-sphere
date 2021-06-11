import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useGetSingleOrder from '../../hooks/useGetSingleOrder';
import Loading from '../../components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import AdminPageLayout from '../../components/admin/AdminPageLayout';
import { OrderDetails as OD, OrderSummary as OS } from '../../components/order';
import OrderEdit from '../../components/order/OrderEdit';
import axios from 'axios';
import { api } from '../../constants';
import getAnOrder from '../../store/actions/orderActions/getAnOrder';

const adorder = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id } = router.query;
	const { order, loading } = useSelector(state => state.getAnOrder);
	const [thisOrder, setThisOrder] = useState({});
	const [edit, setEdit] = useState(false);
	const [value, setValue] = useState('');
	const [paid, setPaid] = useState();

	useEffect(() => {
		if (id != undefined) dispatch(getAnOrder(id));
	}, [id]);

	useEffect(() => {
		if (!loading) {
			setThisOrder(order);
		}
	}, [loading]);

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
				setThisOrder(data);
				//dispatch(getAnOrder(id));
				console.log('order', order);
				console.log('data', data);
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
					<OD order={thisOrder} />
				</div>
				<div className='order-summary-edit'>
					{edit ? (
						<OrderEdit
							order={thisOrder}
							status={thisOrder.status}
							setSortValue={e => setValue(e)}
							paid={thisOrder.isPaid}
							setPaid={e => setPaid(e)}
						/>
					) : (
						<OS order={thisOrder} />
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
