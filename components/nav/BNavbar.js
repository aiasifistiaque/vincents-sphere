import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItem from './NavItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBrand from './NavBrand';
import NavLogged from './NavLogged';
import { useSelector } from 'react-redux';
import { categories } from '../../constants';
import Link from 'next/link';
import BNavLogged from './BNavLogged';

export default function BNavbar() {
	const { cartItems } = useSelector(state => state.cart);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let total = 0;
		cartItems.map(x => (total += x.price));
		setTotalPrice(total);
	}, [cartItems]);

	const length = cartItems.length;

	return (
		<Navbar expand='lg' bg='dark' fixed='top' variant='dark'>
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
					<Nav.Link href='/'>Home</Nav.Link>
					<NavDropdown />
					<Nav.Link href='/'>Gift Box</Nav.Link>
					<Nav.Link href='/about'>About us</Nav.Link>
					<Nav.Link href='/'>Contact</Nav.Link>
					<BNavLogged />
					<Nav.Link href='/cart'>
						Cart ({length}) Tk.{totalPrice}
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export const NavDropdown = ({ children }) => {
	return (
		<div className='nav-dropdown'>
			<p>Categories</p>
			<div class='nav-dropdown-content'>
				{categories.map((cat, i) => (
					<NavCatItem href={`/cat/${cat.name}`}>{cat.name}</NavCatItem>
				))}
			</div>
		</div>
	);
};

export const NavCatItem = ({ children, href }) => {
	return (
		<Link href={href}>
			<div className='nav-cat-item'>
				<p>{children}</p>
			</div>
		</Link>
	);
};
