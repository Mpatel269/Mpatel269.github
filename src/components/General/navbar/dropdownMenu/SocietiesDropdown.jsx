import React from 'react';
import DropNavItem from './DropNavItem';

const SocietiesDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Academic Societies' path='/societies/academic'/>
            <DropNavItem dropNavItem='Non-Academic Societies' path='/societies/non-academic'/>
            <DropNavItem dropNavItem='Start a new Society' path='/societies/new-society'/>
        </div>
    )
};

export default SocietiesDropdown;