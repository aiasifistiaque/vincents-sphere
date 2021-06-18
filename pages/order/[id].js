import React from 'react';
import { useRouter } from 'next/router';
import useGetSingleOrder from '../../hooks/useGetSingleOrder';
import Page from '../../components/Page';
import { OrderDetails, OrderSummary } from '../../components/order';
import PageLoading from '../../components/PageLoading';
import PageNotFound from '../../components/error/PageNotFound';

const order = () => {
	const router = useRouter();
	const { id } = router.query;
	const status = router.query.status;
	const { order, loading, error } = useGetSingleOrder(id);

	if (loading) return <PageLoading />;

	if (error) return <PageNotFound />;

	return (
		<Page title={`Vincent's Sphere | Order #${order._id}`}>
			<div className='order-details-page page-vertical-padding'>
				<div style={{ flex: 6 }}>
					<OrderDetails order={order} status={status} />
				</div>
				<div style={{ flex: 4 }}>
					<OrderSummary order={order} />
				</div>
			</div>
		</Page>
	);
};

export default order;
