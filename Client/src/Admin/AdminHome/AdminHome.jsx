import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import AdminFooter from '../AdminFooter/AdminFooter'
import AdminProducts from '../AdminProducts/AdminProducts'

function AdminHome() {
  return (
    <div>

        <AdminNavbar/>
        <AdminProducts/>

        <AdminFooter/>

        
        

    </div>
  )
}

export default AdminHome