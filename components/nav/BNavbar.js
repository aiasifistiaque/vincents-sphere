import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBrand from './NavBrand';
import { useSelector } from 'react-redux';
import { categories } from '../../constants';
import BNavLogged from './BNavLogged';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
		<Navbar
			expand='lg'
			//bg='dark'
			fixed='top'
			variant='dark'
			style={{
				alignItems: 'center',
				backgroundColor: '#252628',
				flex: 1,
				display: 'flex',
				justifyContent: 'space-between',
				padding: '5px 3%',
			}}>
			<NavBrand />

			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav
					style={{
						display: 'flex',
						justifyContent: 'space-between',

						flex: 1,
					}}>
					<BNavItem href='/'>Home</BNavItem>
					<NavDropdown
						title='Categories'
						id='basic-nav-dropdown'
						style={{ backgroundColor: '#252628', color: 'red' }}>
						{categories.map((cat, i) => (
							<NavDropdown.Item
								key={i}
								href={`/cat/${cat.name}`}
								style={{ padding: '15px' }}>
								{cat.name}
							</NavDropdown.Item>
						))}
					</NavDropdown>
					<BNavItem href='/'>Gift Box</BNavItem>
					<BNavItem href='/about'>About us</BNavItem>
					<BNavItem href='/'>Contact</BNavItem>
					<BNavLogged />

					<BNavItem href='/cart'>
						<div className='v-nav-icon-container'>
							<FontAwesomeIcon icon={faShoppingCart} className='v-cart-icon' />
							<span>
								({length}) ৳ {totalPrice}
							</span>
						</div>
					</BNavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

const DropDown = () => {
	return (
		<NavDropdown title='Categories' id='collasible-nav-dropdown'>
			{categories.map((cat, i) => (
				<Link href={`/cat/${cat.name}`}>
					<NavDropdown.Item key={i}>{cat.name}</NavDropdown.Item>
				</Link>
			))}
		</NavDropdown>
	);
};

const BNavItem = ({ children, href }) => {
	return (
		<Link href={href}>
			<Nav.Link href={href || '#'}>{children}</Nav.Link>
		</Link>
	);
};
