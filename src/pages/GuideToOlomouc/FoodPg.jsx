import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import FoodBody from '../../components/GuideToOlomouc/Food/FoodBody';

const FoodPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <FoodBody/>
            <Footercontainer/>
        </div>
    )
};

export default FoodPg;