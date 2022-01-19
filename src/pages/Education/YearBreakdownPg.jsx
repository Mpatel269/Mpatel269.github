import React from 'react';
import YearBreakdownBody from '../../components/Education/YearBreakdown/YearBreakdownBody';
import YearBreakdownBodyAlt from '../../components/Education/YearBreakdown/YearBreakdownBodyAlt';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const YearBreakdownPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <YearBreakdownBodyAlt/>
            <Footercontainer/>
        </div>
    )
};

export default YearBreakdownPg;