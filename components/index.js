import React from 'react';

export const Center = ({ children }) => {
	return <div className='container-center'>{children}</div>;
};

export const CustomButton = ({ onClick, children, style }) => {
	return (
		<div className='login-button' onClick={onClick} style={style}>
			<p>{children}</p>
		</div>
	);
};

export const LongButton = ({ onClick, children, style }) => {
	return (
		<div className='long-button' onClick={onClick} style={style}>
			<p>{children}</p>
		</div>
	);
};

export const CancelButton = ({ onClick, children, style }) => {
	return (
		<div className='cancel-button' onClick={onClick} style={style}>
			<p>{children}</p>
		</div>
	);
};

export const ErrorText = ({ children }) => {
	return (
		<p
			style={{
				margin: 0,
				padding: 0,
				color: 'crimson',
				fontSize: '.7em',
				fontWeight: '700',
			}}>
			{children}
		</p>
	);
};
