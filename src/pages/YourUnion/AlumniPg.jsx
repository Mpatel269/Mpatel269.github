import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import AlumniBody from '../../components/YourUnion/Alumni/AlumniBody';

const AlumniPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <AlumniBody/>
            <Footercontainer/>
        </div>
    )
};

export default AlumniPg;