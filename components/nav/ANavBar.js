import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBrand from './NavBrand';
import { useSelector } from 'react-redux';
import { categories } from '../../constants';
import BNavLogged from './BNavLogged';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import BNavItem from './BNavItem';
import NavSearch from './NavSearch';
import AdminNavSearch from './AdminNavSearch';

export default function ANavBar({ searchActive, searchOn, searchOff }) {
	const { cartItems } = useSelector(state => state.cart);
	const [totalPrice, setTotalPrice] = useState(0);
	const [length, setLength] = useState(0);

	useEffect(() => {
		let total = 0;
		let len = 0;
		cartItems.map(x => (total += x.price));
		setTotalPrice(total);
		cartItems.map(x => (len += x.qty));
		setLength(len);
	}, [cartItems]);

	return (
		<Navbar
			expand='lg'
			fixed='top'
			//bg='v-navbar'
			className='a-navbar'>
			<NavBrand />

			<AdminNavSearch active={searchActive} on={searchOn} off={searchOff} />

			<Navbar.Toggle
				aria-controls='basic-navbar-nav'
				style={{ margin: '0 4%' }}
			/>

			<Navbar.Collapse id='basic-navbar-nav' className='a-nav-collapse'>
				<Nav className='a-nav'>
					<BNavItem href='/'>Home</BNavItem>

					<BNavLogged />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
