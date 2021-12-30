import React from 'react';
import { Link } from 'react-router-dom';
import pepalogo from '../../../images/pepa-logo-new.png';

const LogoContainer = () => {
    return(
        <Link className='logo-container' to = '/'>
            <div className = "logo-container">
                <img src= {pepalogo} alt="" className= 'pepa-logo-header'/>
            </div>
        </Link>
        
    )
};

export default LogoContainer;