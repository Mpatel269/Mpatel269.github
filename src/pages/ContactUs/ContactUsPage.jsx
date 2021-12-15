import React from 'react';
import ContactUsBody from '../../components/ContactUs/ContactUsBody';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const ContactUsPage = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <ContactUsBody/>
            <Footercontainer/>
        </div>
    )
};

export default ContactUsPage;