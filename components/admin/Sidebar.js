import React from 'react';
import Link from 'next/link';

const Sidebar = ({ select }) => {
	return (
		<div className='admin-panel-sidebar'>
			<h6>Admin Panel</h6>
			<SidebarItem to='min' select={select == 'dash' ? true : false}>
				Dashboard
			</SidebarItem>
			<SidebarItem to='users' select={select == 'users' ? true : false}>
				View Users
			</SidebarItem>
			<SidebarItem to='products' select={select == 'products' ? true : false}>
				View Products
			</SidebarItem>
			<SidebarItem to='orders' select={select == 'orders' ? true : false}>
				View Orders
			</SidebarItem>
		</div>
	);
};

const SidebarItem = ({ children, to, select }) => {
	return (
		<Link href={`/ad${to}`}>
			<div className={select ? 'sidebar-item-select' : 'sidebar-item'}>
				<p>{children}</p>
			</div>
		</Link>
	);
};

export default Sidebar;
