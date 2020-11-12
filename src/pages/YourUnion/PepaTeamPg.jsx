import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import PepaTeam from '../../components/YourUnion/PepaTeam/PepaTeam';


const PepaTeamPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <PepaTeam/>
            <Footercontainer/>
        </div>
    )
};

export default PepaTeamPg;