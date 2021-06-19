import React from 'react';

const PageContainer = ({ children }) => {
	return (
		<div
			style={{ margin: '15vh 4% 5vh 4%', display: 'flex', flexWrap: 'wrap' }}>
			{children}
		</div>
	);
};

export default PageContainer;
