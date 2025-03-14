import React from 'react'
import './SavedAddress.css'
import SettingsMain from '../../Pages/SettingsMain'
import { Link } from 'react-router-dom'
export default function SavedAddress() {
  return (
    <div class="contact-container">
      <div class="back-button" onclick="goHome()">
        <Link to={'/SettingsMain'} >⬅</Link>
      </div>
      <h2>Contact Information</h2>
      <div class="form-grid">
        <input type="text" placeholder="Country" id="country" />
        <input type="text" placeholder="City" id="city" />
        <input type="text" placeholder="Address" id="address" />
        <input type="text" placeholder="Pincode" id="pincode" />
      </div>
      <div class="map-container">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2026002.6887048595!2d1.767411000000009!3d7.349798000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d6a657b14c9%3A0xb43849f101727e38!2sAptech%20Ibadan!5e0!3m2!1sen!2sng!4v1740568219009!5m2!1sen!2sng"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
           </div>
      <button class="save-button" onclick="saveInfo()">Save</button>
    </div>
  )
}
