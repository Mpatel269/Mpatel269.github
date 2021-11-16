import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import YourUnionBody from '../../components/YourUnion/YourUnionBody';

const YourUnionPage = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <YourUnionBody/>
            <Footercontainer/>
        </div>
    )
};

export default YourUnionPage;