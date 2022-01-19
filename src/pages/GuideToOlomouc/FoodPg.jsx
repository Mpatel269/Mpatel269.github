import React from 'react';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';
import FoodBody from '../../components/GuideToOlomouc/Food/FoodBody';
import HeroSlider from '../../components/Homepage/HeroSlider';

const FoodPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <HeroSlider/>
            <FoodBody/>
            <Footercontainer/>
        </div>
    )
};

export default FoodPg;