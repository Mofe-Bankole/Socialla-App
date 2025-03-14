import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Newsfeed from '../Newsfeed/Newsfeed'
import './SidebarNewsfeed.css'

function SidebarNewsfeed() {
  return (
    <div className='main-content'>
      <Sidebar/>
      <Newsfeed/>
    </div>
  )
}

export default SidebarNewsfeed
