import React from 'react';
import DropNavItem from './DropNavItem';

const SupportDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
            <DropNavItem dropNavItem='Advice Service' path = '/support/advice'/>
            <DropNavItem dropNavItem='Peer Mentor' path = '/support/peer-mentor'/>
            <DropNavItem dropNavItem='How to Adult' path = '/support/how-to-adult'/>
            <DropNavItem dropNavItem='How to Student' path = '/support/how-to-student'/>
            <DropNavItem dropNavItem='Out of Hours Support' path = '/support/out-of-hours'/>
        </div>
    )
};

export default SupportDropdown;