import React from 'react'
import Soham from "../Sub_Assets/soham final.jpg"
function Library() {
  return (
    <div>
      <div className='library'>
        <h1>Some <span>Captured moments</span> from Library</h1>
        <div className='library-img'>
          <div className='library-subImg'>
            <img src={Soham} />
            <img src={Soham} />
            <img src={Soham} />
            <img src={Soham} />
         
          </div>
          <div className='library-subImg'>
            <img src={Soham} />
            <img src={Soham} />
            <img src={Soham} />
            <img src={Soham} />
            
          </div>
          <div className='library-subImg'>
            <img src={Soham} />
            <img src={Soham} />
            <img src={Soham} />
            <img src={Soham} />
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Library
