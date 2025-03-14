import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../SidebarNewsfeed/SidebarNewsfeed.css'
import AccountInfo from '../AccountInfo/AccountInfo'
// import AccountInfo from '../AccountInfo/AccountInfo'
function SidebarAccountInfo() {
  return (
    <div className='main-content'>
      <Sidebar/>
      <AccountInfo/>
    </div>
  )
}

export default SidebarAccountInfo
