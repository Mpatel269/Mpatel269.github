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
        <div className = {showMenu ? 'navbar-container-inactive':'navbar-container-active'}>
            <ul>
                <li><NavItem navItem = 'Your Union' path='yourunion'/>
                    <ul>
                        <li><UnionDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Sports' path='sports'/>
                    <ul>
                        <li><SportsDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Societies' path='societies' />
                    <ul>
                        <li><SocietiesDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Education'  path='education'/>
                    <ul>
                        <li><EducationDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Events'  path='events'/>
                    <ul>
                        <li><EventsDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Guide to Olomouc'  path='guidetoolomouc'/>
                    <ul>
                        <li><GuideDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Support'  path='support'/>
                    <ul>
                        <li><SupportDropdown/></li>
                    </ul>
                </li>
                <li><NavItem navItem = 'Contact Us'  path='contactus'/>
                    <ul>
                        <li><ContactDropdown/></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
};

export default NavbarContainer;