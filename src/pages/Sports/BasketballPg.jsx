import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import BasketballBody from '../../components/Sports/Basketball/BasketballBody';

const BasketballPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <BasketballBody/>
            <Footercontainer/>
        </div>
    )
};

export default BasketballPg;