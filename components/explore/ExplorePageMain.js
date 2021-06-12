import React from 'react';
import Loading from '../Loading';
import ExploreProducts from '../product/ExploreProducts';
import ButtonLoading from '../ButtonLoading';

const ExplorePageMain = ({ loading, products, onLoadMore }) => {
	if (loading) return <Loading />;
	else
		return (
			<>
				<div className='all-products-explore'>
					{products.map((product, i) => (
						<ExploreProducts key={i} product={product} />
					))}
				</div>
				<div
					className='load-more-button'
					style={{
						width: 200,
						alignSelf: 'center',
						justifyContent: 'center',
					}}
					onClick={onLoadMore}>
					{loading ? <ButtonLoading /> : <p>Load More</p>}
				</div>
			</>
		);
};

export default ExplorePageMain;
