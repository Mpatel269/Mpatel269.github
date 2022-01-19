import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import SocietiesPageBody from '../../components/Societies/SocietiesPageBody';

const SocietiesPage
 = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <SocietiesPageBody/>
            <Footercontainer/>
        </div>
    )
};

export default SocietiesPage
;