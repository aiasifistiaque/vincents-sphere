import React from 'react';

const EndSectionPlaceHolder = ({ length }) => {
	if (length > 1)
		return (
			<div
				style={{
					margin: '0 10px',
					width: '10em',
				}}>
				<p style={{ color: 'transparent' }}>{'aslkd  '}</p>
				<br />
			</div>
		);
	else return null;
};

export default EndSectionPlaceHolder;
