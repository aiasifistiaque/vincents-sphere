import React from 'react';

const Consult = () => {
	return (
		<div className='consult'>
			<p>Cant decide which one to get?</p>
			<p>
				Let us help you choose the best products for you and your loved oned.
			</p>
			<ConsultButton text='GET FREE CONSULTATION' />
		</div>
	);
};

const ConsultButton = ({ onClick, text }) => {
	return (
		<div className='custom-button'>
			<p>{text}</p>
		</div>
	);
};

export default Consult;
