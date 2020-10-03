import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const GuidePage = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <Footercontainer/>
        </div>
    )
};

export default GuidePage;