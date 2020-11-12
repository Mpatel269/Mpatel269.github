import React from 'react';
import Footercontainer from './General/footer/FooterContainer';
import HeaderContainer from './General/Header/HeaderContainer';
import NavbarContainer from './General/navbar/NavbarContainer';
import PageBody from './PageBody';

const PageTemplate = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <PageBody/>
            <Footercontainer/>

        </div>
    )
};

export default PageTemplate;