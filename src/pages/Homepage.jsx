import React from 'react';
import Footercontainer from '../components/General/footer/FooterContainer';
import HeaderContainer from '../components/General/Header/HeaderContainer';

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