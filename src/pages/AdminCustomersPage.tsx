import React from 'react'
import AdminSidebar from '../components/molecules/AdminPanel/AdminSidebar'
import AdminCustomers from '../components/molecules/AdminPanel/AdminCustomers'

function AdminCustomersPage() {
  return (
    <div className='row'>
        <div className="col-3">
          <AdminSidebar/>
          </div>
        <div className="col-9">
          
            <AdminCustomers/>
            
          </div>
    </div>
  )
}

export default AdminCustomersPage