import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import AcademicBody from '../../components/Societies/Academic/AcademicBody';

const AcademicSocietiesPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <AcademicBody/>
            <Footercontainer/>
        </div>
    )
};

export default AcademicSocietiesPg;