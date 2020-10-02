import React from 'react';
import { Link } from 'react-router-dom'

const NavItem = (props) => {
    return(
        <Link to= {props.path}>
            <div className = "nav-item">
                {props.navItem}
                <i class="fas fa-caret-down nav-item-arrow"></i>
            </div>
        </Link>
        
    )
};

export default NavItem;