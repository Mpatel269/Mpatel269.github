import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import OtherBody from '../../components/Sports/Other/OtherBody';

const OtherPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <OtherBody/>
            <Footercontainer/>
        </div>
    )
};

export default OtherPg;