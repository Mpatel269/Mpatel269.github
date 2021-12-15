import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import ThingsToDoBody from '../../components/GuideToOlomouc/ThingsToDo/ThingsToDoBody';

const ThingsToDoPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <ThingsToDoBody/>
            <Footercontainer/>
        </div>
    )
};

export default ThingsToDoPg;