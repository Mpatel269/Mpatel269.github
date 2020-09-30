import React from 'react';

const NavItem = (props) => {
    return(
        <div className = "nav-item">
            {props.navItem}
            <i class="fas fa-caret-down nav-item-arrow"></i>
        </div>
    )
};

export default NavItem;