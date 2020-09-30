import React from 'react';
import pepalogo from '../../../images/pepa-logo.png'
import faclogo from '../../../images/upol-fac-red.png'

const LogoContainer = () => {
    return(
        <div className = "logo-container">
            <img src= {pepalogo} alt="" className= 'pepa-logo-header'/>
            <img src={faclogo} alt="" className= 'upol-fac-header'/>
        </div>
    )
};

export default LogoContainer;