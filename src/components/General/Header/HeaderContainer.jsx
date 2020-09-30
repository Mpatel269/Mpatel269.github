import React from 'react';
import LogoContainer from './LogoContainer';
import SocialsContainer from './SocialsContainer';
import MenuContainer from './MenuContainer';

const HeaderContainer = () => {
    return(
        <div className = "header-container">
            <MenuContainer />
            <LogoContainer />
            <SocialsContainer />
        </div>
    )
};

export default HeaderContainer;