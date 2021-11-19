import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import FootballBody from '../../components/Sports/Football/FootballBody';

const FootballPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <FootballBody/>
            <Footercontainer/>
        </div>
    )
};

export default FootballPg;