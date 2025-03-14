import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../SidebarNewsfeed/SidebarNewsfeed.css'
import SavedAddress from '../SavedAddress/SavedAddress'
// import AccountInfo from '../AccountInfo/AccountInfo'
function SidebarSavedAddress() {
  return (
    <div className='main-content'>
      <Sidebar/>
      <SavedAddress/>
    </div>
  )
}

export default SidebarSavedAddress;
