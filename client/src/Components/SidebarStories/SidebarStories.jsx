import React from 'react'
import '../SidebarNewsfeed/SidebarNewsfeed.css'
import Sidebar from '../Sidebar/Sidebar'
import Stories from '../Stories/Stories'
function SidebarStories() {
  return (
    
       <div className='main-content'>
      <Sidebar/>
      <Stories/>
    </div>
    
  )
}

export default SidebarStories
