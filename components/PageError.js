import React from 'react';
import Page from './Page';

const PageError = () => {
	return (
		<Page>
			<div
				style={{
					display: 'flex',
					flex: 1,
					padding: '15vh 5%',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<p>Network Error, Please try again</p>
			</div>
		</Page>
	);
};

export default PageError;
