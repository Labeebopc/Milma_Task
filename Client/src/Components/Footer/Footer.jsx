import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-section'>
      <div className="left col-md-6">

        <img className='footer-logo' src="\images\milma-logo.png" alt="" />

      </div>

      <div className="right col-md-6">
        <h6>Follow us :</h6>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-youtube"></i>


      </div>

      {/* <div className='copyright'>
        <p>Milma ice creams © 2022. All rights reserved</p>
      </div> */}

    </div>
  )
}

export default Footer