import React from 'react';
import DropNavItem from './DropNavItem';

const ContactDropdown = (props) => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Contact Details'/>
            <DropNavItem dropNavItem='Feedback and Complaints'/>
        </div>
    )
};

export default ContactDropdown;