import React from 'react';

const Text = ({ color, children, margin, padding }) => {
	const style = {
		margin: margin || 0,
		padding: padding || 0,
		color: color || 'black',
	};

	<p style={style}>{children}</p>;
};

export default Text;
