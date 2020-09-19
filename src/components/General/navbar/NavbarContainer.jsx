import React from 'react';
import NavItem from './NavItem';

const NavbarContainer = () => {
    return(
        <div className = "navbar-container">
            <NavItem navItem = 'Sport'/>
            <NavItem navItem = 'Societies' />
            <NavItem navItem = 'Education' />
            <NavItem navItem = 'Guide to Olomouc' />
            <NavItem navItem = 'Events' />
            <NavItem navItem = 'Your Union' />
            <NavItem navItem = 'Contact Us' />
        </div>
    )
};

export default NavbarContainer;