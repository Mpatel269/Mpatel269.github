import React from 'react';
import DropNavItem from './DropNavItem';

const SupportDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Advice Service'/>
            <DropNavItem dropNavItem='Peer Mentor'/>
            <DropNavItem dropNavItem='How to Adult'/>
            <DropNavItem dropNavItem='How to Student'/>
            <DropNavItem dropNavItem='Out of Hours Support'/>
        </div>
    )
};

export default SupportDropdown;