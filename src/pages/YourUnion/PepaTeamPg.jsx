import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import PepaTeamBody from '../../components/YourUnion/PepaTeam/PepaTeamBody';


const PepaTeamPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <PepaTeamBody/>
            <Footercontainer/>
        </div>
    )
};

export default PepaTeamPg;