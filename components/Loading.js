import React from 'react';
import Page from './Page';

export default function Loading() {
	return (
		<Page>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<h3>loading...</h3>
			</div>
		</Page>
	);
}
