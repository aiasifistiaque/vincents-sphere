import React from 'react';
import Loading from '../Loading';
import ExploreProducts from '../product/ExploreProducts';
import LoadMoreButton from './LoadMoreButton';
import EndOfResult from './EndOfResult';

const ExplorePageMain = ({
	loading,
	products,
	onLoadMore,
	end,
	btnLoading,
}) => {
	if (loading) return <Loading />;
	else
		return (
			<>
				<div className='all-products-explore'>
					{products.map((product, i) => (
						<ExploreProducts key={i} product={product} />
					))}
				</div>
				{end ? (
					<EndOfResult />
				) : (
					<LoadMoreButton
						loading={btnLoading}
						onClick={!btnLoading ? onLoadMore : () => {}}
					/>
				)}
			</>
		);
};

export default ExplorePageMain;
