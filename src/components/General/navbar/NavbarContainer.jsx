import React from 'react';
import NavItem from './NavItem';
import {useSelector} from 'react-redux';
import UnionDropdown from './dropdownMenu/UnionDropdown';
import SportsDropdown from './dropdownMenu/SportsDropdown';
import ContactDropdown from './dropdownMenu/ContactDropdown';
import EducationDropdown from './dropdownMenu/EducationDropdown';
import EventsDropdown from './dropdownMenu/EventsDropdown';
import GuideDropdown from './dropdownMenu/GuideDropdown';
import SupportDropdown from './dropdownMenu/SupportDropdown';
import SocietiesDropdown from './dropdownMenu/SocietiesDropdown';



const NavbarContainer = (props) => {
    const showMenu = useSelector((state) => state.menuActive);

    return(
        <div className = {showMenu ? 'navbar-container-active' :'navbar-container-inactive'}>
            <ul>
                <li><NavItem navItem = 'Your Union' />
                    <ul>
                        <li><UnionDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Sports'/>
                    <ul>
                        <li><SportsDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Societies' />
                    <ul>
                        <li><SocietiesDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Education' />
                    <ul>
                        <li><EducationDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Events' />
                    <ul>
                        <li><EventsDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Guide to Olomouc' />
                    <ul>
                        <li><GuideDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Support' />
                    <ul>
                        <li><SupportDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Contact Us' />
                    <ul>
                        <li><ContactDropdown/></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
};

export default NavbarContainer;