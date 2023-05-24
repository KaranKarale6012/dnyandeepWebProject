import React from 'react'
import "../CSS/Info.css"
import school from "../Assets/school.png"
function Info() {
  return (
    <div className='info'>
      <h1><span>Who</span> We Are</h1>
      <div className='Info_para'>
        <img src={school} />
        <p>We aim to redefine a child's life with grace and confidence. We aim to impart education with befitting practices, to inculcate good working habits, imbibe suitable social and cultural values.

          Education is derived from a Latin word that means to bring out. Our philosophy on Education is very simple- to draw out of the child the gift of intelligence- by creating an atmosphere where inquiry and interest can be stimulated by instilling confidence in a child to believe in himself or herself.</p>
      </div>

    </div>
  )
}

export default Info
