import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import TravelBody from '../../components/GuideToOlomouc/Travel/TravelBody';

const TravelPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <TravelBody/>
            <Footercontainer/>
        </div>
    )
};

export default TravelPg;