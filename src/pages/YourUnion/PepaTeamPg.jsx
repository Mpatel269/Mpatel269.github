import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import PepaTeamBodyAlt from '../../components/YourUnion/PepaTeam/PepaTeamBodyAlt';


const PepaTeamPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <PepaTeamBodyAlt/>
            <Footercontainer/>
        </div>
    )
};

export default PepaTeamPg;