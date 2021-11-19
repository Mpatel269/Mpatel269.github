import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import SportsPageBody from '../../components/Sports/SportsPageBody';

const SportsPage = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <SportsPageBody/>
            <Footercontainer/>
        </div>
    )
};

export default SportsPage;