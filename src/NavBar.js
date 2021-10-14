import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import {useSelector} from 'react-redux'

import {Link, NavLink} from 'react-router-dom'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const cart= useSelector(state=>state.cart);
    console.log(cart)
  let quantity = cart.reduce((acc, item)=>{
      return Number(acc) + Number(item.quantity);
  },0)

  return (
    <div>
      <Navbar className='justify-content-between'color="light" light expand="md">
        <NavbarBrand href="/">Shoply</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem className='mx-2'>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem className='mx-2'>
              <NavLink to="/cart">Cart ({quantity} items)</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;