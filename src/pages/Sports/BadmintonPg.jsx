import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import BadmintonBody from '../../components/Sports/Badminton/BadmintonBody';

const BadmintonPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <BadmintonBody/>
            <Footercontainer/>
        </div>
    )
};

export default BadmintonPg;