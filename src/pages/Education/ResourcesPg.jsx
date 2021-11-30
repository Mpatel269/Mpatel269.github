import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import ResourcesBody from '../../components/Education/Resources/ResourcesBody';

const ResourcesPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <ResourcesBody/> 
            <Footercontainer/>
        </div>
    )
};

export default ResourcesPg;