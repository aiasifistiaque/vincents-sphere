import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FooterSections = ({ data }) => {
	const router = useRouter();
	return (
		<div className='footer-sections'>
			<h5>{data.header}</h5>
			{data.items.map((item, i) => (
				<Link href={item.to || ''} key={i}>
					<a>{item.name}</a>
				</Link>
			))}
		</div>
	);
};

export default FooterSections;
