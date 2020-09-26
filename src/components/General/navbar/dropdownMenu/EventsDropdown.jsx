import React from 'react';
import DropNavItem from './DropNavItem';

const EventsDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Whats on?'/>
            <DropNavItem dropNavItem='Suggest an Idea'/>
        </div>
    )
};

export default EventsDropdown;