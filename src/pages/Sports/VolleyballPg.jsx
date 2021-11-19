import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import VolleyballBody from '../../components/Sports/Volleyball/VolleyballBody';

const VolleyballPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <VolleyballBody/>
            <Footercontainer/>
        </div>
    )
};

export default VolleyballPg;