import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavItem = ({ children, href }) => {
	const router = useRouter();
	return (
		<div className='nav-item' onClick={() => router.push(href)}>
			<p>{children}</p>
		</div>
	);
};

export default NavItem;
