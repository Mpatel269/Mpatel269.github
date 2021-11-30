import React from 'react';
import EducationBody from '../../components/Education/EducationBody';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const EducationPage = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <EducationBody/>
            <Footercontainer/>
        </div>
    )
};

export default EducationPage;