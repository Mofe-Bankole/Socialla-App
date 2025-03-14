import React from 'react'
import './Notification.css'
export default function Notification() {
  return (
    <div className='notification-cont2'>
      <div class="notifications-container">
        <div class="header">
            <h2>Notification <span class="badge">23</span></h2>
            <div class="header-icons">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-trash"></i>
            </div>
        </div>

        <div class="notification-list">
            <div class="notification new">
                <img src="user1.jpg" alt="User"/>
                <div class="content">
                    <p><strong>Victor Errixon</strong> posted in <strong>UI/UX Community</strong>: "Mobile Apps UI Designer is required for Tech Lorem ipsum dolor sit amet consectet..."</p>
                    <span class="time">12 minutes ago</span>
                </div>
            </div>

            <div class="notification">
                <span class="avatar">M</span>
                <div class="content">
                    <p><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong>: "Mobile Apps UI Designer is required for Tech..."</p>
                    <span class="time">30 minutes ago</span>
                </div>
            </div>

            <div class="notification">
                <img src="user3.jpg" alt="User"/>
                <div class="content">
                    <p><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong>: "Mobile Apps UI Designer is required for Tech..."</p>
                    <span class="time">1 hour ago</span>
                </div>
            </div>

            <div class="notification">
                <img src="user4.jpg" alt="User"/>
                <div class="content">
                    <p><strong>Hurin Seary</strong> posted in <strong>UI/UX Community</strong>: "Mobile Apps UI Designer is required for Tech..."</p>
                    <span class="time">2 hours ago</span>
                </div>
            </div>

            <div class="notification old">
                <img src="user1.jpg" alt="User"/>
                <div class="content">
                    <p><strong>Victor Errixon</strong> posted in <strong>UI/UX Community</strong>: "Mobile Apps UI Designer is required for Tech..."</p>
                    <span class="time">6 hours ago</span>
                </div>
            </div>

            <div class="notification">
                <span class="avatar red">S</span>
                <div class="content">
                    <p><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong>: "Mobile Apps UI Designer is required for Tech..."</p>
                    <span class="time">11 hours ago</span>
                </div>
            </div>

            <div class="date-label">Yesterday</div>

            <div class="notification">
                <img src="user3.jpg" alt="User"/>
                <div class="content">
                    <p><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong>: "Mobile Apps UI Designer is required for Tech..."</p>
                    <span class="time">12:48 PM</span>
                </div>
            </div>

            <div class="notification">
                <img src="user3.jpg" alt="User"/>
                <div class="content">
                    <p><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong>: "Mobile Apps UI Designer is required for Tech..."</p>
                    <span class="time">12:48 PM</span>
                </div>
            </div>
            <div class="notification">
                <img src="user3.jpg" alt="User"/>
                <div class="content">
                    <p><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong>: "Mobile Apps UI Designer is required for Tech..."</p>
                    <span class="time">12:48 PM</span>
                </div>
            </div>
            <div class="notification">
                <img src="user3.jpg" alt="User"/>
                <div class="content">
                    <p><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong>: "Mobile Apps UI Designer is required for Tech..."</p>
                    <span class="time">12:48 PM</span>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
