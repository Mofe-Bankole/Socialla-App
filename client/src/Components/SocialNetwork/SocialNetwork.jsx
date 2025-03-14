import React from 'react'
import './SocialNetwork.css'
export default function SocialNetwork() {
  return (
    <div className='socialNet-cont'>
        <div class="container">
        <div class="header2">
            <button class="back-btn">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h2 className='social-network-header'>Social Network</h2>
        </div>

        <form class="social-form">
            <div class="form-group">
                <label>Facebook</label>
                <input type="text" placeholder="Enter Facebook profile"/>
            </div>
            <div class="form-group">
                <label>Twitter</label>
                <input type="text" placeholder="Enter Twitter profile"/>
            </div>
            <div class="form-group">
                <label>Linkedin</label>
                <input type="text" placeholder="Enter Linkedin profile"/>
            </div>
            <div class="form-group">
                <label>Instagram</label>
                <input type="text" placeholder="Enter Instagram profile"/>
            </div>
            <div class="form-group">
                <label>Flickr</label>
                <input type="text" placeholder="Enter Flickr profile"/>
            </div>
            <div class="form-group">
                <label>Github</label>
                <input type="text" placeholder="Enter Github profile"/>
            </div>
            <div class="form-group">
                <label>Skype</label>
                <input type="text" placeholder="Enter Skype username"/>
            </div>
            <div class="form-group">
                <label>Google</label>
                <input type="text" placeholder="Enter Google profile"/>
            </div>

            <button type="submit" class="save-btn">Save</button>
        </form>
    </div>

    </div>
  )
}
