import React from 'react';
import DropNavItem from './DropNavItem';

const UnionDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Pepa Team'/>
            <DropNavItem dropNavItem='Elections'/>
            <DropNavItem dropNavItem='Room Bookings'/>
            <DropNavItem dropNavItem='Alumni'/>
        </div>
    )
};

export default UnionDropdown;