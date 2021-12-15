import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import UsefulAppsBody from '../../components/GuideToOlomouc/UsefulApps/UsefulAppsBody';

const UsefulAppsPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <UsefulAppsBody/>
            <Footercontainer/>
        </div>
    )
};

export default UsefulAppsPg;