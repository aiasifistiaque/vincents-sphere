import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBrand from './NavBrand';
import { useSelector } from 'react-redux';
import { categories } from '../../constants';
import BNavLogged from './BNavLogged';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import BNavItem from './BNavItem';
import NavSearch from './NavSearch';

export default function BNavbar({ searchActive, searchOn, searchOff }) {
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
			variant='dark'
			//bg='v-navbar'
			className='v-navbar'>
			<NavBrand />

			<NavSearch active={searchActive} on={searchOn} off={searchOff} />

			<Navbar.Toggle
				aria-controls='basic-navbar-nav'
				className='nav-toggle-v'
				style={{
					color: 'white',
					alignItems: 'center',
					justifyContent: 'center',
					border: 'none',
					margin: '0 2%',
				}}>
				<FontAwesomeIcon
					icon={faBars}
					style={{ height: 20, color: 'whitesmoke' }}
				/>
			</Navbar.Toggle>

			<Navbar.Collapse id='basic-navbar-nav' className='v-nav-collapse'>
				<Nav className='v-nav'>
					<BNavItem href='/'>Home</BNavItem>
					<NavDropdown
						title={<span style={{ color: 'whitesmoke' }}>Categories</span>}
						id='basic-nav-dropdown'
						className='nav-dd'>
						{categories.map((cat, i) => (
							<NavDropdown.Item
								key={i}
								href={`/cat/${cat.name}`}
								style={{
									padding: '10px 15px',
								}}>
								{cat.name}
							</NavDropdown.Item>
						))}
					</NavDropdown>
					<BNavItem href='/about'>About us</BNavItem>

					<BNavItem href='/wishlist'>Wishlist</BNavItem>

					<BNavLogged />

					<BNavItem href='/cart'>
						<div className='v-nav-icon-container'>
							<FontAwesomeIcon icon={faShoppingCart} className='v-cart-icon' />
							<div className='cart-badge'>
								<span>{length}</span>
							</div>
							{<span> ৳{totalPrice}</span>}
						</div>
					</BNavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
