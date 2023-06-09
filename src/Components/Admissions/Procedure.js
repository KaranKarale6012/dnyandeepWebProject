import React from 'react'
import Admission_img from "../Sub_Assets/admission.jpg"
function Procedure() {
  return (
    <div>
      <div className='Admission'>
      <h1>Admission <span>Procedure</span> </h1>
      
        <div className='Admission-open'>
           <img src={Admission_img}  />
          <ul>
            
            <li>1. Application for admission should be made on the printed froms attached with this Prospectus.</li>
            <li>2. No admission will be considered unless all the requirement are met fully.</li>
            <li>3. Parents/Guardians must give an ubdertaking in wrtting that they will abide by the rules and regulations of the school as stipulated from time to time.</li>
            <li>4. The Principal does not bind himself to furnish to himself any reason for rejecting any application.</li>
            <li>5. The following Certificates/Documents must be attached ato the application.
              <ul className='sub-list'>
                <li>a. Originals evidence of the child's date of birth(like the Government Birth Certificates</li>
                <li>b. Last Progress Report from the previous School.</li>
                <li>c. Medical Certificate signed by a Registered Doctor. (The Blood Report & The Screening Report of the Chest are important.</li>
                <li>d. Address Proof.</li>
                <li>e. Passport sized photograph of the chil.</li>
                <li>f. Family photograph.</li>
              </ul>
            </li>
            <li>6. If the child is seeking admission for class 2 & above. Transfer Certificates from a recognized school is required.</li>
            <li>7. When the child is being admitted on a transfer certificates, he/she will not be placed in a higher class than which is shown on the Certificates to be qualified for in the appropriate month of the particular year. He/she will not be promoted till the end of the school year.</li>
            <li>8. This is a Government Directive and thus there is no. Relaxing of this rule.</li>
            <li>9. Admission will be confirmed on payment of one fees. The amount will be credited and adjust against the first term's bill. </li>
            <li>10. The amount is not refundable if a parent accepts the child's seat and withdraws later.</li>
            <li>11. This is very important for you to note as no request for refunds will be accepted under any circumstances</li>

          </ul>
        </div>
        <div className='AgeLimit'>
          <hr/>
          <h1>Age <span>Limit</span></h1>
          <div className='AgeTables'>
            <table>
              <tr>
                <th>Class</th>
                <th>Age</th>
              </tr>
              <tr>
                <td>Nursery</td>
                <td>2 years 6 mon. to 3 years 5 mon.</td>
              </tr>
              <tr>
                <td>LowerKG</td>
                <td>3 years 6 mon. to 4 years 5 mon.</td>
              </tr>
              <tr>
                <td>UpperKG</td>
                <td>4 years 6 mon. to 5 years 5 mon.</td>
              </tr>
              <tr>
                <td>STD I</td>
                <td>5 years 6 mon. to 6 years 5 mon.</td>
              </tr>
              <tr>
                <td>STD II</td>
                <td>6 years 6 mon. to 7 years 5 mon.</td>
              </tr>
              <tr>
                <td>STD III</td>
                <td>7 years 6 mon. to 8 years 5 mon.</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>Class</th>
                <th>Age</th>
              </tr>
             
              <tr>
                <td>STD IV</td>
                <td>8 years 6 mon. to 9 years 5 mon.</td>
              </tr>
              <tr>
                <td>STD V</td>
                <td>9 years 6 mon. to 10 years 5 mon.</td>
              </tr>
              <tr>
                <td>STD VI</td>
                <td>10 years 6 mon. to 11 years 5 mon.</td>
              </tr>
              <tr>
                <td>STD VII</td>
                <td>11 years 6 mon. to 12 years 5 mon.</td>
              </tr>
              <tr>
                <td>STD VIII</td>
                <td>12 years 6 mon. to 13 years 5 mon.</td>
              </tr>
              <tr>
                <td>STD IX</td>
                <td>13 years 6 mon. to 14 years 5 mon.</td>
              </tr>
            </table>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Procedure
