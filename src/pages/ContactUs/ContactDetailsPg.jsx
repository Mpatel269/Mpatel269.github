import React from 'react';
import ContactDetailsBody from '../../components/ContactUs/ContactDetails/ContactDetailsBody';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const ContactDetailsPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <ContactDetailsBody/>
            <Footercontainer/>
        </div>
    )
};

export default ContactDetailsPg;