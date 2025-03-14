import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../SidebarNewsfeed/SidebarNewsfeed.css'
import Profile from '../Profile/Profile'
function SidebarProfile() {
  return (
    <div className='main-content'>
    <Sidebar/>
    <Profile/>
  </div>
    
  )
}

export default SidebarProfile;
