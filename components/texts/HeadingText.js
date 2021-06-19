import React from 'react';

const HeadingText = ({ h, color, children, margin, padding }) => {
	const style = {
		margin: margin || 0,
		padding: padding || 0,
		color: color || 'black',
	};

	if (h == 1) return <h1 style={{ style }}>{children}</h1>;
	else if (h == 2) return <h2 style={style}>{children}</h2>;
	else if (h == 3) return <h3 style={style}>{children}</h3>;
	else if (h == 4) return <h4 style={style}>{children}</h4>;
	else if (h == 5) return <h5 style={style}>{children}</h5>;
	else return <h6 style={style}>{children}</h6>;
};

export default HeadingText;
