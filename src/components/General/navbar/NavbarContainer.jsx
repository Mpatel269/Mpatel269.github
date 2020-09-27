import React from 'react';
import NavItem from './NavItem';
import {useSelector} from 'react-redux';
import UnionDropdown from './dropdownMenu/UnionDropdown';

const NavbarContainer = (props) => {
    const showMenu = useSelector((state) => state.menuActive);

    return(
        <div className = {showMenu ? 'navbar-container-active' :'navbar-container-inactive'}>
            <NavItem navItem = 'Your Union' >
                <UnionDropdown />
            </NavItem>

            <NavItem navItem = 'Sports'/>
            <NavItem navItem = 'Societies' />
            <NavItem navItem = 'Education' />
            <NavItem navItem = 'Events' />
            <NavItem navItem = 'Guide to Olomouc' />
            <NavItem navItem = 'Support' />
            <NavItem navItem = 'Contact Us' />
        </div>
    )
};

export default NavbarContainer;