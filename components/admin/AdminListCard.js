import React from 'react';

export const AdminListCard = ({ children, seen }) => {
	return (
		<div
			className='ad-prod-card'
			style={{ backgroundColor: seen ? 'rgba(30,144,255,.1)' : 'white' }}>
			{children}
		</div>
	);
};

export const AdminListContainer = ({ children }) => {
	return <div className='ad-prod-container'>{children}</div>;
};

export const AText = ({ children }) => {
	return (
		<div className='ad-card-item'>
			<p>{children}</p>
		</div>
	);
};

export const AButton = ({ children, onClick }) => {
	return (
		<div className='ad-card-button' onClick={onClick}>
			<p>{children}</p>
		</div>
	);
};
