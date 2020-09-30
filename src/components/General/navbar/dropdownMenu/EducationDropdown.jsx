import React from 'react';
import DropNavItem from './DropNavItem'

const EducationDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Resources'/>
            <DropNavItem dropNavItem='Research'/>
            <DropNavItem dropNavItem='Online Training'/>
            <DropNavItem dropNavItem='Year Breakdown'/>
        </div>
    )
};

export default EducationDropdown;