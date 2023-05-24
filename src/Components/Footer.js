import React from 'react'
import "../CSS/Footer.css"
function Footer() {
    return (
        <div>
            <div className='Footer'>
                <div className='Footer_Info'>
                    <div className='Footer_vision'>
                        <h2>Vision</h2>
                        <p>To create an environment to foster personal growth and the development of individual capacity to transform society through service.</p>
                    </div>
                <div className='Footer_address'>
                    <h2>Address</h2>
                    <p>Takari road
                        Islampur, Sangli,
                        Maharashtra,India.
                        415409   </p>
                        <p>Contact :  02342 222999</p>
                        <p>Email : dnyandeepnic@rediffmail.com</p>
                </div>
                <div className='Quick_links'>
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Admission</li>
                    <li>Staff</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                 </ul>
                </div>
                <div className='Follow Us'>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                    <li>Youtube</li>
                    <li>Google</li>
                 </ul>
                </div>
                </div>
                <hr />
                <div className='copyright'>
                    <p>All rights reserved by Dnandeep International School and Junior College.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
