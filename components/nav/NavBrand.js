import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBrand = () => {
	return (
		<div className='nav-brand-logo'>
			<Link href='/'>
				<Image src='/vlogo.png' height={50} width={50} />
			</Link>
		</div>
	);
};

export default NavBrand;
