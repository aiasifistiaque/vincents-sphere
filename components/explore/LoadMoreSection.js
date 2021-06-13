import React from 'react';
import ButtonLoading from '../ButtonLoading';
import EndOfResult from './EndOfResult';

const LoadMoreSection = ({ loading, onClick, end }) => {
	if (end) return <EndOfResult />;
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

export default LoadMoreSection;
