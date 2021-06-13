import React from 'react';
import ButtonLoading from '../ButtonLoading';

const LoadMoreButton = ({ loading, onClick }) => {
	return (
		<div
			className='load-more-button'
			style={{
				width: 200,
				alignSelf: 'center',
				justifyContent: 'center',
				height: 50,
			}}
			onClick={onClick}>
			{loading ? <ButtonLoading /> : <p>Load More</p>}
		</div>
	);
};

export default LoadMoreButton;
