import React from 'react';
import Link from 'next/link';

const NavBrand = () => {
	return (
		<Link href='/'>
			<h2 className='nav-brand-item'>Vincents Sphere</h2>
		</Link>
	);
};

export default NavBrand;
