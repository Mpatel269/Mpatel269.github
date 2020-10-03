import React from 'react';
import DropNavItem from './DropNavItem';

const UnionDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Pepa Team' path='/yourunion/pepa-team'/>
            <DropNavItem dropNavItem='Elections' path='/yourunion/elections'/>
            <DropNavItem dropNavItem='Room Bookings' path='/yourunion/room-booking'/>
            <DropNavItem dropNavItem='Alumni' path='/yourunion/alumni'/>
        </div>
    )
};

export default UnionDropdown;