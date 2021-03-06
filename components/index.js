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

export const TextButton = ({ onClick, children, style }) => {
	return (
		<div className='text-button' onClick={onClick} style={style}>
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
		<div
			style={{
				backgroundColor: 'rgba(200,20,60,.1)',
				padding: '10px 20px',
				marginBottom: '10px',
				maxWidth: 300,
			}}>
			<p
				style={{
					margin: 0,
					padding: 0,
					color: 'crimson',
					fontSize: '.7em',
					fontWeight: '700',
					textTransform: 'capitalize',
				}}>
				{children}
			</p>
		</div>
	);
};

export const SuccessText = ({ children }) => {
	return (
		<div
			style={{
				backgroundColor: 'rgba(46,139,87,.1)',
				padding: '10px 20px',
				marginBottom: '10px',
				maxWidth: 300,
			}}>
			<p
				style={{
					margin: 0,
					padding: 0,
					color: 'seagreen',
					fontSize: '.7em',
					fontWeight: '700',
					textTransform: 'capitalize',
				}}>
				{children}
			</p>
		</div>
	);
};
