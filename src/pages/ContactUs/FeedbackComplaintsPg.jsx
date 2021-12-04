import React from 'react';
import FeedbackComplaintsBody from '../../components/ContactUs/FeedbackComplaints/FeedbackComplaintsBody';
import Footercontainer from '../../components/General/footer/FooterContainer';
import HeaderContainer from '../../components/General/Header/HeaderContainer';
import NavbarContainer from '../../components/General/navbar/NavbarContainer';

const FeedbackComplaintsPg = () => {
    return(
        <div>
            <HeaderContainer/>
            <NavbarContainer/>
            <FeedbackComplaintsBody/>
            <Footercontainer/>
        </div>
    )
};

export default FeedbackComplaintsPg;