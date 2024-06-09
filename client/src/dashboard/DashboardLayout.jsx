import  Sidebar  from './SidebarBook'
import React from 'react'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='flex  gap-4 flex-col md:flex-row'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout