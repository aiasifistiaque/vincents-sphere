import React from 'react';
import HeadingText from './HeadingText';
import { general } from '../../constants';

const PriceTable = ({ title, children, margin }) => {
	return (
		<div
			style={{
				display: 'flex',
				margin: margin || 0,
				justifyContent: 'space-between',
			}}>
			<HeadingText>{title}:</HeadingText>
			<HeadingText>
				{general.takaSymbol}
				{children}
			</HeadingText>
		</div>
	);
};

export default PriceTable;
