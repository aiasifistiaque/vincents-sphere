import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItem from './NavItem';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBrand from './NavBrand';

export default function NavBar() {
	return (
		<Navbar expand='lg' bg='dark' fixed='top'>
			<NavBrand />

			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav
					style={{
						display: 'flex',
						flex: 1,
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}>
					<NavItem href='/'>Home</NavItem>
					<NavItem href='/'>Categories</NavItem>
					<NavItem href='/'>Gift Box</NavItem>
					<NavItem href='/'>Contact Us</NavItem>
					<NavItem href='/'>Log In</NavItem>
					<NavItem href='/'>Cart</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
