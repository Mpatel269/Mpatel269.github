import React from 'react';
import ResearchBody from '../../components/Education/Research/ResearchBody';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const ResearchPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <ResearchBody/>
            <Footercontainer/>
        </div>
    )
};

export default ResearchPg;