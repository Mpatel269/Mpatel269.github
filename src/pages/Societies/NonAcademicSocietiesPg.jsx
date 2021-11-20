import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import NonAcademicBody from '../../components/Societies/NonAcademic/NonAcademicBody';

const NonAcademicSocietiesPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <NonAcademicBody/>
            <Footercontainer/>
        </div>
    )
};

export default NonAcademicSocietiesPg;