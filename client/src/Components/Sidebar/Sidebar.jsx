import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <>
      <div class="app-sidebar-container normal_font">
        <div class="side-bar">
            <div class="side-bar-section1">
                <p class="side-bar-section1-header">News Feed</p>
                <div class="side-bar-home">
                    <p><Link to={'/'}> Newsfeed</Link></p>
                </div>
                <div class="side-bar-stories">
                    <p><Link to={'/StoriesMain'}>Explore Stories</Link></p>
                </div>
                <div class="side-bar-groups">
                    <p><Link to={'/GroupsMain'} >Popular Groups</Link></p>
                </div>
                <div class="side-bar-home">
                    <p><Link to={'/BadgesMain'}>Badges</Link></p>
                </div>
                <div class="side-bar-home">
                <p><Link to={'/ProfileMain'}>User Profile</Link></p>
                </div>
            </div>
            <div class="side-bar-section2">
                <p class="side-bar-section1-header">More Pages</p>
                <div class="side-bar-Notifications">
                <p><Link to={'/NotificationMain'}>Notification</Link></p>
                </div>
                <div class="side-bar-chat">
                    <p>Chat</p>
                </div>
                <div class="side-bar-settings">
                    <p><Link to={'/SettingsMain'} >Settings</Link></p>
                </div>
                <div class="side-bar-events">
                    <p>Latest Events</p>
                </div>
            </div>
      </div>
      </div>
    </>
  )
}

export default Sidebar;
