import React from 'react';
import facebook from '../../../images/facebook-icon.png';
import instagram from '../../../images/instagram-icon.png';

const SocialsContainer = () => {
    return(
        <div className = "socials-container">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/UPOLPEPA/">
                <img src={facebook} alt="" className='facebook-icon'/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pepa.up/?hl=en">
                <img src={instagram} alt="" className='instagram-icon'/>
            </a>
        </div>
    )
};

export default SocialsContainer;