import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../SidebarNewsfeed/SidebarNewsfeed.css'
import ChangePassword from '../ChangePassword/ChangePassword'
// import AccountInfo from '../AccountInfo/AccountInfo'
function SidebarChangePassword() {
  return (
    <div className='main-content'>
      <Sidebar/>
      <ChangePassword/>
    </div>
  )
}

export default SidebarChangePassword;
