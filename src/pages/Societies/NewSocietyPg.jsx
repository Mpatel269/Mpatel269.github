import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import CreateNewBody from '../../components/Societies/CreateNew/CreateNewBody';

const NewSocietyPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <CreateNewBody/>
            <Footercontainer/>
        </div>
    )
};

export default NewSocietyPg;