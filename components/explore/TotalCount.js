import React from 'react';

const TotalCount = ({ loading, item, count }) => {
	return (
		<div>
			<p>
				Showing Results:{' '}
				{!loading ? `${item.length} of ${count}` : 'LOADING...'}
			</p>
		</div>
	);
};

export default TotalCount;
