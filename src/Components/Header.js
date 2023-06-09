import React from 'react'
import {link} from 'react-router-dom'
import school_logo from '../Assets/school_logo.png'
import board_logo from '../Assets/board_logo.png'
import '../CSS/Header.css'
function Header() {
  return (
    <div>

      <marquee> <a href='/contact'>For online addmission click here</a></marquee>
  
     <div className='header'>
      
         <img src={school_logo} className='school_logo'/>
       
        <div className='header_info'>
         <h2>N.D. PATIL PRATISHTHAN'S</h2>
         <h4>DNYANDEEP INTERNATIONAL SCHOOL AND JUNIOR COLLEGE, ISLAMPUR</h4>
         <h3><i>CBSE Affiliation Code : 1130515</i></h3>
        </div> 
    
        
         <img src={board_logo} />
        
     </div>
     </div>
  )
}

export default Header
