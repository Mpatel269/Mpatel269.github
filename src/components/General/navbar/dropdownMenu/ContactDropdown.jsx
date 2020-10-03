import React from 'react';
import DropNavItem from './DropNavItem';

const ContactDropdown = (props) => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Contact Details' path = '/contactus/details'/>
            <DropNavItem dropNavItem='Feedback and Complaints' path = '/contactus/feedback'/>
        </div>
    )
};

export default ContactDropdown;