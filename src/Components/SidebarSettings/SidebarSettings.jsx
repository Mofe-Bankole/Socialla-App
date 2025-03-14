import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Settings from '../Settings/Settings'
import '../SidebarNewsfeed/SidebarNewsfeed.css'
function SidebarSettings() {
  return (
    <div className='main-content'>
      <Sidebar/>
      <Settings/>
    </div> 
  )
}

export default SidebarSettings
