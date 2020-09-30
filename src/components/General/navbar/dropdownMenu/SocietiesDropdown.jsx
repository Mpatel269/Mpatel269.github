import React from 'react';
import DropNavItem from './DropNavItem';

const SocietiesDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Academic Societies'/>
            <DropNavItem dropNavItem='Non-Academic Societies'/>
            <DropNavItem dropNavItem='Start a new Society'/>
        </div>
    )
};

export default SocietiesDropdown;