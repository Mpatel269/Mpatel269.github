import React from 'react';
import WhatsOnBody from '../../components/Events/WhatsOn/WhatsOnBody';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const WhatsOnPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <WhatsOnBody/>
            <Footercontainer/>

        </div>
    )
};

export default WhatsOnPg;