import React from 'react'
import Groups from '../Groups/Groups'
import Sidebar from '../Sidebar/Sidebar'
import '../SidebarNewsfeed/SidebarNewsfeed.css'
function SidebarGroups() {
  return (
    <div className='main-content'>
    <Sidebar/>
    <Groups/>
  </div>
    
  )
}

export default SidebarGroups;
