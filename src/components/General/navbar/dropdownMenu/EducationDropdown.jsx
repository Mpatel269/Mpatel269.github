import React from 'react';
import DropNavItem from './DropNavItem'

const EducationDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Resources' path='/education/resources'/>
            <DropNavItem dropNavItem='Research' path='/education/research'/>
            <DropNavItem dropNavItem='Online Training' path='/education/online-training'/>
            <DropNavItem dropNavItem='Year Breakdown' path='/education/year-breakdown'/>
        </div>
    )
};

export default EducationDropdown;