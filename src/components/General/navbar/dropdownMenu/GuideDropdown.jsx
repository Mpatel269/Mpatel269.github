import React from 'react';
import DropNavItem from './DropNavItem';

const GuideDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Food'/>
            <DropNavItem dropNavItem='Health'/>
            <DropNavItem dropNavItem='Travel'/>
            <DropNavItem dropNavItem='Useful Apps'/>
            <DropNavItem dropNavItem='Things to do'/>
        </div>
    )
};

export default GuideDropdown;