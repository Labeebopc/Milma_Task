import React from 'react'
import './AdminFooter.css'

function AdminFooter() {
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
    </div>
  )
}

export default AdminFooter