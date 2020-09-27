import React from 'react';
import Footercontainer from '../components/General/footer/FooterContainer';
import HeaderContainer from '../components/General/Header/HeaderContainer';
import ContactDropdown from '../components/General/navbar/dropdownMenu/ContactDropdown';
import EducationDropdown from '../components/General/navbar/dropdownMenu/EducationDropdown';
import EventsDropdown from '../components/General/navbar/dropdownMenu/EventsDropdown';
import GuideDropdown from '../components/General/navbar/dropdownMenu/GuideDropdown';
import SocietiesDropdown from '../components/General/navbar/dropdownMenu/SocietiesDropdown';
import SportsDropdown from '../components/General/navbar/dropdownMenu/SportsDropdown';
import SupportDropdown from '../components/General/navbar/dropdownMenu/SupportDropdown';
import UnionDropdown from '../components/General/navbar/dropdownMenu/UnionDropdown';
import NavbarContainer from '../components/General/navbar/NavbarContainer';
import Hero from '../components/Homepage/Hero';
import HomepageBody from '../components/Homepage/HomepageBody';


const Homepage = () => {
    return(
        <div>
            <HeaderContainer />
            <NavbarContainer />
            <Hero />
            <HomepageBody />
            <Footercontainer />
        </div>
    )
}

export default Homepage;