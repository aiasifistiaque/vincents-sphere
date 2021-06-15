import React from 'react';
import Link from 'next/link';
import ProductWrapper from '../product/ProductWrapper';

const AdminPanelButton = ({ children, href, onClick }) => {
	return (
		<Link href={href} passHref>
			<ProductWrapper>
				<div className='admin-panel-button'>
					<p>{children}</p>
				</div>
			</ProductWrapper>
		</Link>
	);
};
export default AdminPanelButton;
