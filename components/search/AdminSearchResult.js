import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading';
import { isEmpty } from 'lodash';
import SearchProductContainer, {
	SearchProductCard,
} from './SearchProductContainer';
import SearchProducts from './SearchProducts';
import getEmailUserAction from '../../store/actions/userActions/getEmailUserAction';
import adminSearchUserAction from '../../store/actions/userActions/adminSearchUserAction';
import adminSearchOrderAction from '../../store/actions/orderActions/adminSearchOrderAction';
import adminSearchProductAction from '../../store/actions/productActions/adminSearchProductAction';

export const ResOrderById = ({ id }) => {
	const dispatch = useDispatch();
	const { order, loading, error } = useSelector(
		state => state.adminSearchOrder
	);

	useEffect(() => {
		dispatch(adminSearchOrderAction(id));
	}, [id]);

	if (loading) return <Loading />;
	else if (isEmpty(order)) return <div>no results found</div>;
	else if (error) return <div>no results found</div>;
	else
		return (
			<SearchProductContainer>
				<SearchProductCard href={`/adorder/${order._id}`}>
					<p>{order._id}</p>
					<p>{order.totalPrice}</p>
				</SearchProductCard>
			</SearchProductContainer>
		);
};

export const ResProductById = ({ id }) => {
	const dispatch = useDispatch();
	const { product, loading, error } = useSelector(
		state => state.adminSearchProduct
	);

	useEffect(() => {
		dispatch(adminSearchProductAction(id));
	}, [id]);

	if (loading) return <Loading />;
	else if (isEmpty(product)) return <div>no results found</div>;
	else if (error) return <div>no results found</div>;
	else
		return (
			<SearchProductContainer>
				<SearchProducts product={product} admin />
			</SearchProductContainer>
		);
};

export const ResUserById = ({ id }) => {
	const dispatch = useDispatch();
	const { user, loading, orders, role, error } = useSelector(
		state => state.adminSearchUser
	);

	useEffect(() => {
		dispatch(adminSearchUserAction(id));
	}, [id]);

	if (loading) return <Loading />;
	else if (isEmpty(user)) return <div>no results found</div>;
	else if (error) return <div>no results found</div>;
	else {
		console.log(user);
		return (
			<SearchProductContainer>
				<SearchProductCard href={`/aduser/${user._id}`}>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<p>Orders: {orders.length}</p>
					<p>Role: {role}</p>
				</SearchProductCard>
			</SearchProductContainer>
		);
	}
};

export const ResUserByMail = ({ id }) => {
	const dispatch = useDispatch();
	const { user, loading, orders, role, error } = useSelector(
		state => state.emailUser
	);

	useEffect(() => {
		dispatch(getEmailUserAction(id));
	}, [id]);

	if (loading) return <Loading />;
	else if (isEmpty(user)) return <div>no results found</div>;
	else if (error) return <div>no results found</div>;
	else {
		console.log(user);
		return (
			<SearchProductContainer>
				<SearchProductCard href={`/aduser/${user._id}`}>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<p>Orders: {orders.length}</p>
					<p>Role: {role}</p>
				</SearchProductCard>
			</SearchProductContainer>
		);
	}
};
