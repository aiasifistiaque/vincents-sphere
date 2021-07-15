import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NavBrand = () => {
	const router = useRouter();
	return (
		<div className='nav-brand-logo'>
			<Image
				unoptimized={true}
				alt="Vincent's Sphere"
				src='/vlogo.png'
				height={50}
				width={50}
				onClick={() => router.push('/')}
			/>
		</div>
	);
};

export default NavBrand;
