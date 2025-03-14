import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Newsfeed from '../Components/Newsfeed/Newsfeed'
import SidebarNewsfeed from '../Components/SidebarNewsfeed/SidebarNewsfeed'

function NewsfeedMain() {
  return (
   <>
   <Navbar/>
   <SidebarNewsfeed/>
   </>
  )
}

export default NewsfeedMain;
