import React from 'react'
import Chairman_img from "../Sub_Assets/chairman.jpg"
function Principal() {
  return (
    <div>
      <div className='chairman'>
        <h1><span>Principal</span> Message</h1>
        <div className='message'>
          <div className='chairman_img'>
            <img src={Chairman_img} />
            <h3>Mrs. Alaknanda Prakash Shinde</h3>
          </div>
          <div className='chairman_message'>
            <p>Walk Tall-With immense pride and great pleasure I welcome you to the school's website. You could be a parent, a student, a staff member or anyone interested in gaining deeper insights into the functioning and learning environment of our exciting world. This institution has honed and fine-tuned a learning and life-skilling system that has been envied and benchmarked across India and the region for many decades. Right from its inception to now, our institution has marched forward to spread the light of education and pave the path of academic excellence for every student. The key focus areas continue to remain - creating opportunities, challenging minds, encouraging innovation and sustaining excitement.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Principal
