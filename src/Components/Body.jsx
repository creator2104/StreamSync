import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
        {/* the children will come over here */}
    </div>
  )
}

export default Body
