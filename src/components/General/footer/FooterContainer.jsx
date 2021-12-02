import React from 'react';

const Footercontainer = () => {
    return(
        <div className = "footer-container">
            <div className='footer-quick-links'>
                <h1>Quick Links:</h1>
                <a target="_blank" href="https://www.upol.cz/en/">UPOL website</a><br/>
                <a target="_blank" href="https://stag.upol.cz/">STAG</a><br/>
                <a  target="_blank" href="https://portal.upol.cz/"> Portal</a><br/>
                <a  target="_blank" href="https://outlook.com/upol.cz"> Univeristy Email</a><br/>
                <a  target="_blank" href="https://moodle.upol.cz"> Moodle</a><br/>
                <a  target="_blank" href=""> Feedback and Complaints</a><br/>
                <a  target="_blank" href=""> FAQs</a><br/>
                <a  target="_blank" href=""> Out-of-Hours Support</a><br/><br/>
            </div>
            <div className='footer-follow-us'>
                <h1>Follow us:</h1>
                <a target="_blank" href="https://www.facebook.com/UPOLPEPA/"><i class="fab fa-facebook footer-icons" ></i></a>
                <a target="_blank" href="https://www.instagram.com/pepa.up/?hl=en"><i class="fab fa-instagram-square footer-icons"></i></a>
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