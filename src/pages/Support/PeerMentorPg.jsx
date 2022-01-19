import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import PeerMentorBody from '../../components/Support/PeerMentor/PeerMentorBody';

const PeerMentorPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <PeerMentorBody/>
            <Footercontainer/>
        </div>
    )
};

export default PeerMentorPg;