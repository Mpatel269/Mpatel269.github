import React from 'react';
import SuggestIdeaBody from '../../components/Events/SuggestIdea/SuggestIdeaBody';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const SuggestIdeaPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <SuggestIdeaBody/>
            <Footercontainer/>
        </div>
    )
};

export default SuggestIdeaPg;