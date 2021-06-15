import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const ItemLoading = () => {
	return (
		<div
			style={{
				display: 'flex',
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				padding: 100,
				//backgroundColor: 'blue',
			}}>
			<CircularProgress style={{ color: 'black' }} />
		</div>
	);
};

export default ItemLoading;
