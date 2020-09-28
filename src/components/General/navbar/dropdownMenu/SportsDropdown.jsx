import React from 'react';
import DropNavItem from './DropNavItem';

const SportsDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
                <DropNavItem dropNavItem='Football'/>
                <DropNavItem dropNavItem='Badminton'/>
                <DropNavItem dropNavItem='Basketball'/>
                <DropNavItem dropNavItem='Cricket'/>
                <DropNavItem dropNavItem='Volleyball'/>
                <DropNavItem dropNavItem='Other'/>
                <DropNavItem dropNavItem='Hall of Fame'/>
        </div>
    )
};

export default SportsDropdown;