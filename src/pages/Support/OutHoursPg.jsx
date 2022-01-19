import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import OutOfHoursBody from '../../components/Support/OutOfHours/OutOfHoursBody';

const OutHoursPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <OutOfHoursBody/>
            <Footercontainer/>
        </div>
    )
};

export default OutHoursPg;