import React from 'react'
import './AccountInfo.css'
import SettingsMain from '../../Pages/SettingsMain'
import { Link } from 'react-router-dom'
export default function AccountInfo() {
  return (
    <div class="account-cont">
      <div class="account-container">
        {/*  onclick="goHome()" */}
      <div class="back-button">
        <Link to={'/SettingsMain'}>⬅</Link>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Z-wzlVCEA2eVUE-h1YDFsIggC0J3ea_3tw&s"
        alt="Profile Image"
        class="profile-image"
      />
      <p>Update your account details</p>
      <div>
        <div class="form-grid">
          <input type="text" placeholder="First Name" id="first-name" />
          <input type="text" placeholder="Last Name" id="last-name" />
          <input type="email" placeholder="Email" id="email" />
          <input type="text" placeholder="Phone" id="phone" />
        </div>
        <input type="text" placeholder="Country" id="country" />
        {/* <p></p> */}
        <input type="text" placeholder="Address" id="address" />
        <p></p>
        <div class="form-grid">
          <input type="text" placeholder="Town/City" id="town" />
          <input type="text" placeholder="Post Code" id="postcode" />
        </div>

        <div class="new-sec">
          <input type="file" id="profile-image" class="full-width" />
          <textarea
            placeholder="Message"
            id="message"
            class="full-width"
            rows="20"
          ></textarea>
          <button class="save-button" onclick="saveDetails()">Save</button>
        </div>
      </div>
    </div>
    </div>
  )
}
