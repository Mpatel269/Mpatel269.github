import React from 'react';
import DropNavItem from './DropNavItem';

const SportsDropdown = () => {
    return(
        <div className= 'generic-dropdown'>
                <DropNavItem dropNavItem='Football' path='sports/football'/>
                <DropNavItem dropNavItem='Badminton' path='sports/badminton'/>
                <DropNavItem dropNavItem='Basketball' path='sports/basketball'/>
                <DropNavItem dropNavItem='Cricket' path='sports/cricket'/>
                <DropNavItem dropNavItem='Volleyball' path='sports/volleyball'/>
                <DropNavItem dropNavItem='Other' path='sports/other'/>
                <DropNavItem dropNavItem='Hall of Fame' path='sports/hall-of-fame'/>
        </div>
    )
};

export default SportsDropdown;