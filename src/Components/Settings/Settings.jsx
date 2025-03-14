import React from 'react'
import './Settings.css'
import { Link } from 'react-router-dom'
import AccountInfoMain from '../../Pages/AccountInfoMain'
export default function Settings() {
    {/* <script>
      document.getElementById("logout").addEventListener("click", function () {
        window.location.href = "index.html";
      });
    </script> */}

  return (
    <div className='main-container'>
   
    <div class="settings-container">
      <h2>Settings</h2>
      <ul>
        <li>
          <img src="./images/houselogo.png" alt="Account Icon" class="icon" />
          <Link to={'/AccountInfoMain'}>Account Information</Link>
        </li>
        <li>
          <img src="./images/location.jpg" alt="Address Icon" class="icon" />
          <Link to={'/SavedAddressMain'}>Saved Address</Link>
        </li>
        <li>
          <img src="./images/padlock.png" alt="Password Icon" class="icon" />
          <Link to={'/ChangePasswordMain'}>ChangePassword</Link>
        </li>
        <li>
          <img
            src="./images/notification.png"
            alt="Notification Icon"
            class="icon"
          />
          <Link to={'/SocialNetworkMain'}>Social Account</Link>
        </li>
        <li>
          <img src="./images/log out.jpeg" alt="Logout Icon" class="icon" />
          <a href="#" id="logout">Log Out</a>
        </li>
      </ul>
    </div>
    </div>


  )
}
