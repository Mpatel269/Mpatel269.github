import React from 'react';
import EventsPageBody from '../../components/Events/EventsPageBody';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const EventsPage = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <EventsPageBody/>
            <Footercontainer/>
        </div>
    )
};

export default EventsPage;