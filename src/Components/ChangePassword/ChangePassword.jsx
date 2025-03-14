import React from 'react'
import './ChangePassword.css'
import { Link } from 'react-router-dom'
export default function ChangePassword() {
  return (
    <div class="password-cont">
      <div class="container">
      <form action="#" method="POST">
        <div class="back-button" onclick="goHome()">
          <Link to={'/SettingsMain'}>⬅</Link>
        </div>
        <h2>Change Password</h2>
        <label for="current-password">Current Password</label>
        <input
          type="password"
          id="current-password"
          name="current-password"
          required
        />

        <label for="new-password">New Password</label>
        <input type="password" id="new-password" name="new-password" required />

        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required
        />

        <button type="submit" class="save-btn">Save</button>
      </form>
    </div>
    </div>
  )
}
