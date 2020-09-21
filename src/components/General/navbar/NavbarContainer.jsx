import React from 'react';
import NavItem from './NavItem';
import {useSelector} from 'react-redux';

const NavbarContainer = (props) => {
    const showMenu = useSelector((state) => state.menuActive);

    return(
        <div className = {showMenu ? 'navbar-container-active' :'navbar-container-inactive'}>
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