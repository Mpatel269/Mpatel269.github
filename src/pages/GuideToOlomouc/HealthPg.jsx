import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import HealthBody from '../../components/GuideToOlomouc/Health/HealthBody';

const HealthPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <HealthBody/>
            <Footercontainer/>
        </div>
    )
};

export default HealthPg;