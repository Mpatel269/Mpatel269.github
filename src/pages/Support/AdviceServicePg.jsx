import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import AdviceBody from '../../components/Support/Advice/AdviceBody';

const AdviceServicePg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <AdviceBody/>
            <Footercontainer/>
        </div>
    )
};

export default AdviceServicePg;