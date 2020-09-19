import React from 'react';
import LogoContainer from './LogoContainer';
import SocialsContainer from './SocialsContainer';

const HeaderContainer = () => {
    return(
        <div className = "header-container">
            <LogoContainer />
            <SocialsContainer />
        </div>
    )
};

export default HeaderContainer;