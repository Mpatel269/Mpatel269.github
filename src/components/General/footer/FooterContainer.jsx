import React from 'react';

const Footercontainer = () => {
    return(
        <div className = "footer-container">
            <div className='footer-top-links'>
                <h1>Top Links:</h1>
                <p>Univeristy website: upol.cz/en/</p>
                <p>STAG: stag.upol.cz</p>
                <p>Portal: portal.upol.cz/</p>
                <p>Univeristy Email: cvt.upol.cz/en/email/</p>
                <p>Moodle: cvt.upol.cz/moodle/</p>
                <p>Feedback and Complaints</p>
                <p>FAQs</p>
                <p>Out of hours Support</p>
            </div>
            <div className='footer-follow-us'>
                <h1>Follow us:</h1>
                <i class="fab fa-facebook footer-icons"></i>
                <i class="fab fa-instagram-square footer-icons"></i>
            </div>
            <div className='footer-useful-info'>
                <h1>Useful Info:</h1>
                <p>Current President: Hashim Vakil</p>
                <p>Email: pepa.palacky@gmail.com</p>
            </div>
            <div className='footer-bottom'>
                <p>© 2020 Palacky English Program Association</p>
            </div>
        </div>
    )
}

export default Footercontainer