import React from 'react';
import {useDispatch} from 'react-redux';
import { menuHandler } from '../../../actions/actions';

const MenuContainer = () => {
    const dispatch = useDispatch();


    return(
        <div className= 'menu-container'>
            <i class="fas fa-bars menu-icon" onClick={() => dispatch(menuHandler())}></i>
        </div>
    )
};

export default MenuContainer;