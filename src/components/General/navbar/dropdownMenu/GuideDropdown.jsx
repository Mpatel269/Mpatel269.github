import React from 'react';
import DropNavItem from './DropNavItem';

const GuideDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Food' path = '/guidetoolomouc/food'/>
            <DropNavItem dropNavItem='Health' path = '/guidetoolomouc/health'/>
            <DropNavItem dropNavItem='Travel' path = '/guidetoolomouc/travel'/>
            <DropNavItem dropNavItem='Useful Apps' path = '/guidetoolomouc/useful-apps'/>
            <DropNavItem dropNavItem='Things to do' path = '/guidetoolomouc/things-to-do'/>
        </div>
    )
};

export default GuideDropdown;