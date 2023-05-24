import React from 'react'
import Info_Img from '../Sub_Assets/about_school.jpg'
import Mission_Img from '../Sub_Assets/Mission-Vision-.png'
import '../SubCss/Submenu.css'

function School_info() {
  return (
    <div>
     
      <div className='school-info'>
        <h1>School <span>Information</span></h1>
        <div className='school-info-1'>
          <img src={Info_Img} />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</p>
        </div>
        <div className='school-info-2'>
        <h1><span>Mission an</span>d Vision</h1>
        <div className='vision-mission-info'>
          <div className='vision-info'>
            <div className='vision'>
              <h2>Vision</h2>
              <p>
                To create an environment to foster personal growth and the development of individual capacity to transform society through service
              </p>
            </div>
            <div className='mission'>
              <h2>Mission</h2>
              <p>
                To train new generations of youth who will excel morally and academically.
                To create a generation of world citizens dedicated to serving humanity.
                To emphasize understanding over mere accumulation of information.
              </p>
            </div>
          </div>

        
        <div className='vision-img'>
          <img src={Mission_Img} />
        </div>

      </div>
    </div>
    </div >
   
    </div>
  )
}

export default School_info
