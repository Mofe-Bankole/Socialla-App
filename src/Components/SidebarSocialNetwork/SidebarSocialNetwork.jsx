import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../SidebarNewsfeed/SidebarNewsfeed.css'
import SocialNetwork from '../SocialNetwork/SocialNetwork'
// import AccountInfo from '../AccountInfo/AccountInfo'
function SidebarSocialNetwork() {
  return (
    <div className='main-content'>
      <Sidebar/>
      <SocialNetwork/>
    </div>
  )
}

export default SidebarSocialNetwork
