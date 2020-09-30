import React from 'react';
import facebook from '../../../images/facebook-icon.png';
import instagram from '../../../images/instagram-icon.png';

const SocialsContainer = () => {
    return(
        <div className = "socials-container">
            <img src={facebook} alt="" className='facebook-icon'/>
            <img src={instagram} alt="" className='instagram-icon'/>
        </div>
    )
};

export default SocialsContainer;