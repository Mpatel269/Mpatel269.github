import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import ElectionsBody from '../../components/YourUnion/Elections/ElectionsBody';

const ElectionsPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <ElectionsBody />
            <Footercontainer/>
        </div>
    )
};

export default ElectionsPg;