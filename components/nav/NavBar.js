import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItem from './NavItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBrand from './NavBrand';
import NavLogged from './NavLogged';
import { useSelector } from 'react-redux';
import { categories } from '../../constants';
import Link from 'next/link';

export default function NavBar() {
	const { cartItems } = useSelector(state => state.cart);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let total = 0;
		cartItems.map(x => (total += x.price));
		setTotalPrice(total);
	}, [cartItems]);

	const length = cartItems.length;

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
					<NavDropdown />
					<NavItem href='/'>Gift Box</NavItem>
					<NavItem href='/about'>About us</NavItem>
					<NavLogged />
					<NavItem href='/cart'>
						Cart ({length}) ৳{totalPrice}
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export const NavDropdown = ({ children }) => {
	return (
		<div className='nav-dropdown'>
			<p>Categories</p>
			<div className='nav-dropdown-content'>
				{categories.map((cat, i) => (
					<NavCatItem href={`/cat/${cat.name}`}>{cat.name}</NavCatItem>
				))}
			</div>
		</div>
	);
};

export const NavCatItem = ({ children, href }) => {
	const router = useRouter();
	return (
		<div className='nav-cat-item' onClick={() => router.push(href)}>
			<p>{children}</p>
		</div>
	);
};
