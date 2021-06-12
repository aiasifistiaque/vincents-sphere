import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FooterSections = ({ data }) => {
	const router = useRouter();
	return (
		<div className='footer-sections'>
			<h5>{data.header}</h5>
			{data.items.map((item, i) => (
				<a
					key={i}
					onClick={() => {
						router.push(item.to || '');
					}}>
					{item.name}
				</a>
			))}
		</div>
	);
};

export default FooterSections;
