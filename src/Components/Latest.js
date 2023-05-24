import React from 'react'
import "../CSS/Latest.css"
function Latest() {
  return (
    <div className='latest'>
    <h1>Willing <span>To Join Us</span></h1>
    <div className='Join_cards'>
        <div className='card'>
            <p>1</p>
            <h2>Apply</h2>
            <ul>
            <li><a href=''>Click here to Apply </a>for Admission </li>
            </ul>
        </div>
        <div className='card'>
            <p>2</p>
            <h2>Form Filling</h2>
            <ul>
            <li>Fill th Admission Form accordingly</li>
            </ul>
        </div>
        <div className='card'>
            <p>3</p>
            <h2> Verification</h2>
            <ul>
            <li>verify the documentation</li>
            </ul>
        </div>
        <div className='card'>
            <p>4</p>
            <h2>Join</h2>
            <ul>
            <li>You are member of school</li>
            </ul>
           
        </div>
    </div>
    </div>
  )
}

export default Latest
