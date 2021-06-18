import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import AdminPageLayout from '../../components/admin/AdminPageLayout';
import { OrderDetails as OD, OrderSummary as OS } from '../../components/order';
import OrderEdit from '../../components/order/OrderEdit';
import getAnOrder from '../../store/actions/orderActions/getAnOrder';
import { TextButton } from '../../components';
import Link from 'next/link';
import ProductWrapper from '../../components/product/ProductWrapper';
import PageNotAuthorized from '../../components/error/PageNotAuthorized';
import orderSeenAction from '../../store/actions/orderActions/orderSeenAction';
import editOrderAction from '../../store/actions/orderActions/editOrderAction';
import Container from '../../components/buttons/Container';

const adorder = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id } = router.query;
	const { order, loading, error } = useSelector(state => state.getAnOrder);
	const [thisOrder, setThisOrder] = useState({});
	const [edit, setEdit] = useState(false);
	const [value, setValue] = useState('');
	const [paid, setPaid] = useState();
	const [pageLoading, setPageLoading] = useState(true);

	useEffect(() => {
		if (id != undefined) {
			dispatch(getAnOrder(id));
			dispatch(orderSeenAction(id));
		}
	}, [id]);

	useEffect(() => {
		if (!loading) {
			setThisOrder(order);
			setPageLoading(false);
			setEdit(false);
		}
	}, [loading]);

	const editOrder = async () => {
		dispatch(editOrderAction(order, value, paid));
	};

	if (pageLoading) return <Loading />;

	if (error) return <PageNotAuthorized />;

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

					{loading ? (
						<Container center margin='1em'>
							<h6>Saving...</h6>
						</Container>
					) : edit ? (
						<EditingButton
							cancelEdit={() => setEdit(false)}
							saveEdit={editOrder}
						/>
					) : (
						<>
							<EditButton setEdit={() => setEdit(true)} />
							<Container right margin='0 1em'>
								<Link href={`/aduser/${order.user._id}`} passHref>
									<ProductWrapper>
										<TextButton onClick={() => {}}>Customer Details</TextButton>
									</ProductWrapper>
								</Link>
							</Container>
						</>
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
