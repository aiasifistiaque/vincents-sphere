import React from 'react';

const Consult = () => {
	return (
		<div className='consult'>
			<h6>Cant decide which one to get?</h6>
			<p>
				Let us help you choose the best products for you and your loved oned.
			</p>
			<ConsultButton text='GET FREE CONSULTATION' />
		</div>
	);
};

const ConsultButton = ({ text }) => {
	return (
		<div
			className='custom-button'
			onClick={() => window.open('https://www.facebook.com/vincentssphere')}>
			<p>{text}</p>
		</div>
	);
};

export default Consult;
