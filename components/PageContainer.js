import React from 'react';

const PageContainer = ({ children, horizontal }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: horizontal ? 'row' : 'column',
				margin: '15vh 5%',
			}}>
			{children}
		</div>
	);
};

export default PageContainer;
