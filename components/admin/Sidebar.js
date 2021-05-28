import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
	return (
		<div className='admin-panel-sidebar'>
			<SidebarItem to='min'>Dashboard</SidebarItem>
			<SidebarItem to='users'>View Users</SidebarItem>
			<SidebarItem to='products'>View Products</SidebarItem>
			<SidebarItem to='orders'>View Orders</SidebarItem>
		</div>
	);
};

const SidebarItem = ({ children, to }) => {
	return (
		<Link href={`/ad${to}`}>
			<div className='sidebar-item'>
				<p>{children}</p>
			</div>
		</Link>
	);
};

export default Sidebar;
