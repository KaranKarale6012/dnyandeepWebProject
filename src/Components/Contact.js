import React from 'react'
import "../CSS/Contact.css"
import Contact_img from "../Assets/contact.png"
function Contact() {
  return (
    <div>
      <div className='Contact'>
        <h1>Contact <span>Us</span></h1>
        <div className='sub_contact'>
          <div className='contact-left'>
            <img src={Contact_img} />
          </div>
          <div className='contact-right'>
            <form action=''>
              <input type='text' placeholder='Enter your name' />
              <input type='text' placeholder='Enter your Email Id' />
              <input type='text' placeholder='Enter your Mobile number' />
              <textarea placeholder='Enter Description' />
              <button className='btn'>Submit</button>
            </form>
          </div>
        </div>
        {/* <div className='application'>
          <hr />
         <li><a href='' > For Online Admission-2022-23 Click Here</a></li> 
          <li><a href='' >  For Online Enquiry Click Here</a></li>
        </div> */}
      </div>
    </div>
  )
}

export default Contact
