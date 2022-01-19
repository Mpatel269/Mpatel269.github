import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import GuideToOlomoucBody from '../../components/GuideToOlomouc/GuideToOlomoucBody';

const GuidePage = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <GuideToOlomoucBody/>
            <Footercontainer/>
        </div>
    )
};

export default GuidePage;