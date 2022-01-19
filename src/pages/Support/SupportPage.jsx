import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import SupportBody from '../../components/Support/SupportBody';

const SupportPage = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <SupportBody/>
            <Footercontainer/>
        </div>
    )
};

export default SupportPage;