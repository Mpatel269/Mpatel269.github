import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import CompetitionsBody from '../../components/Sports/Competitions/CompetitionsBody';

const CompetitionsPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <CompetitionsBody/>
            <Footercontainer/>
        </div>
    )
};

export default CompetitionsPg;