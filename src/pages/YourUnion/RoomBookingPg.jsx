import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import RoomBookingsBody from '../../components/YourUnion/RoomBookings/RoomBookingsBody';

const RoomBookingPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <RoomBookingsBody/>
            <Footercontainer/>
        </div>
    )
};

export default RoomBookingPg;