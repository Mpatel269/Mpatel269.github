import React from 'react';
import YearBreakdownBody from '../../components/Education/YearBreakdown/YearBreakdownBody';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const YearBreakdownPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <YearBreakdownBody/>
            <Footercontainer/>
        </div>
    )
};

export default YearBreakdownPg;