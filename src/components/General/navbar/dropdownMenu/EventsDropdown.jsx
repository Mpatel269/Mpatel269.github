import React from 'react';
import DropNavItem from './DropNavItem';

const EventsDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Whats on?' path = '/events/whats-on'/>
            <DropNavItem dropNavItem='Suggest an Idea' path = '/events/suggest-idea'/>
        </div>
    )
};

export default EventsDropdown;