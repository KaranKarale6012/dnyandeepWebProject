import React from 'react'
import Career_img from '../Assets/career_img.jpg'
import "../CSS/Career.css"
function Career() {
  return (
    <div>
      <div className='career'>
        <h1>Car<span>eer</span></h1>
        <div className='Sub_career'>
          {/* <div className='career-img'>
            <img src={Career_img} />
          </div> */}
          <div className='career-info'>
            <div className=' ul-1'>
            <h3>
              1. Position of Senior Teacher / Co-ordinator / HOD:-
            </h3>
            <ul>
              <li>Excellent understanding of the subject taught.</li>
              <li>English communication is a must.</li>
              <li>Experience in CBSE curriculum is a must.</li>
              <li>Should begin best practices in the department.</li>
              <li>Should have keen interested in improving the teaching -learning environment</li>
              <li>Good co-ordination skills and interpersonal techniques.</li>
            </ul>
            <h3>
              4.Senior Clerk:-
            </h3>
            <ul>
              <li>Commerce Graduate / Post Graduate with minimum 2 years experience of working with CBSE School. Through computer knowledge is a must.</li>

            </ul>
           
            </div>
            <div className='ul-2'>
            <h3>
              2.Position of Assistant Teacher:-
            </h3>

            <ul>
              <li>Excellent understanding of the subject taught.</li>
              <li>English communication is a must.</li>
              <li>Experience in CBSE curriculum is a must.</li>
              <li>Should begin best practices in the department.</li>
              <li>Should have keen interested in improving the teaching -learning environment</li>
              <li>Good co-ordination skills and interpersonal techniques.</li>
            </ul>
            <h3>
              3.Non Academics:-
            </h3>

            <ul>
              <li>Relationship Executive / Officer:</li>
              <li>Graduate with minimum 1 to 3 years experience preferably in Education Industry. Through computer knowledge is a must.</li>

            </ul>
            
            </div>
            
          </div>
        </div>
        <div className='resume'>
          <h1>Send Your <span>Resume on</span></h1>
          <ul>
            <li>
              1. POSTAL ADDRESS: Mandale Mala, Opp. BSNL Office, Takari Road, Islampur, 415409
            </li>
            <li>
              2. You can mail your resume to :- <a href=' dnyandeepnic@rediffmail.com'> dnyandeepnic@rediffmail.com</a> 
            </li>
            <li>
              3. Web site: <a href='www.dnyandeepinternationalschool.orgx'> www.dnyandeepinternationalschool.orgx</a> 
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Career
