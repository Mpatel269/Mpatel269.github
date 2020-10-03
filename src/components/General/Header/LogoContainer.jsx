import React from 'react';
import { Link } from 'react-router-dom';
import pepalogo from '../../../images/pepa-logo.png'
import faclogo from '../../../images/upol-fac-red.png'

const LogoContainer = () => {
    return(
        <Link className='logo-container' to = '/'>
            <div className = "logo-container">
                <img src= {pepalogo} alt="" className= 'pepa-logo-header'/>
                <img src={faclogo} alt="" className= 'upol-fac-header'/>
            </div>
        </Link>
        
    )
};

export default LogoContainer;