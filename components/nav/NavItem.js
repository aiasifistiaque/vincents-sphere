import React from 'react';
import Link from 'next/link';

export const NavItem = ({ children, href }) => {
	return (
		<Link href={href}>
			<div className='nav-item'>
				<p>{children}</p>
			</div>
		</Link>
	);
};

export default NavItem;
