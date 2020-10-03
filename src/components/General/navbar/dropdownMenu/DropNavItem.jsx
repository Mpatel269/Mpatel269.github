import React from 'react';
import { Link } from 'react-router-dom';

const DropNavItem = (props) => {
    return(
        <Link to = {props.path}>
            <div className = "drop-nav-item">
                {props.dropNavItem}
                <i class="fas fa-angle-right nav-drop-arrow"></i>
            </div>
        </Link>
        
    )
};

export default DropNavItem;