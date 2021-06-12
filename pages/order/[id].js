import React from 'react';
import { useRouter } from 'next/router';
import useGetSingleOrder from '../../hooks/useGetSingleOrder';
import Page from '../../components/Page';
import Loading from '../../components/Loading';
import { OrderDetails, OrderSummary } from '../../components/order';
import PageLoading from '../../components/PageLoading';

const order = () => {
	const router = useRouter();
	const { id } = router.query;
	const status = router.query.status;
	const { order, loading } = useGetSingleOrder(id);
	if (loading) return <PageLoading />;
	return (
		<Page>
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
