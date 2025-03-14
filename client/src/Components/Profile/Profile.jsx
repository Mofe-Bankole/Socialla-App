import React from 'react'
import './Profile.css'
export default function Profile() {
  return (
    <div class="profile-cont">
        <div class="profile-container">
      <div class="cover-photo">
        <img
          src="https://media.istockphoto.com/id/1369240784/vector/fawn-or-beige-or-very-light-brown-pastel-coloured-smudged-scuffed-grunge-horizontal-vector.jpg?s=612x612&w=0&k=20&c=wkbv-Y9ls47a5zNzCiRIcSWbcaVjU00jUnuWrrJzdyc="
          alt="Cover Photo" 
        />
      </div>
      <div class="profile-details">
        <div class="profile-info">
          <img
            class="profile-pic"
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile Picture"
          />
          <h2>John Doe</h2>
        </div>
        <div class="actions">
          <button class="add-friend"><span>&#9993;</span> Add Friend</button>
          <button class="menu">&#8942;</button>
        </div>
      </div>
      <div class="profile-links">
        <a href="#about-section">About</a>
        <a href="photo.html">Photos</a>
        <a href="likes.html">Likes</a>
      </div>
      <div id="about-section" class="about-section">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Proin ac nisi nec lorem tincidunt tincidunt. Vivamus
          venenatis, nisi nec tincidunt tincidunt, nisl nisi tincidunt nisi, nec
          tincidunt nisl nisi nec nisi.
        </p>
      </div>
      <div id="photos-section" class="photos-section">
        <h3>Photos</h3>
        <div class="photo-grid">
          <img src="./pics/istockphoto-537241730-612x612.jpg" alt="Photo" />
          <img
            src="./pics/e546b2ec-2995-4541-8326-598781aaec20_large.webp"
            alt="Photo"
          />
          <img
            src="./pics/many-people-swimming-in-the-water-at-the-beach.jpg"
            alt="Photo"
          />
          <img src="./pics/b_tov_beachbrain_170803.webp" alt="Photo" />
          <img
            src="./pics/13cli-newsletter-winthrop-klft-articleLarge.webp"
            alt="Photo"
          />
          <img
            src="./pics/premium_photo-1683120730432-b5ea74bd9047.jpeg"
            alt="Photo"
          />
        </div>
        <span class="see-all">See All</span>
      </div>
      <div class="event-section">
        <h3>Events</h3>
        <div class="event-grid">
          <div class="event-box event1">Feb 22</div>
          <div class="event-box event2">Mar 10</div>
          <div class="event-box event3">Apr 15</div>
        </div>
      </div>
    </div>
    <div class="modal">
      <span class="close-modal">&times;</span>
      <div class="modal-content">
        <img src="./pics/istockphoto-537241730-612x612.jpg" alt="Photo" />
        <img
          src="./pics/e546b2ec-2995-4541-8326-598781aaec20_large.webp"
          alt="Photo"
        />
        <img
          src="./pics/many-people-swimming-in-the-water-at-the-beach.jpg"
          alt="Photo"
        />
        <img src="./pics/b_tov_beachbrain_170803.webp" alt="Photo" />
        <img
          src="./pics/13cli-newsletter-winthrop-klft-articleLarge.webp"
          alt="Photo"
        />
        <img
          src="./pics/premium_photo-1683120730432-b5ea74bd9047.jpeg"
          alt="Photo"
        />
        <img
          src="./pics/lifestyle-people-office_23-2149173736.avif"
          alt="Photo"
        />
        <img
          src="./pics/free-photo-of-people-playing-in-water-on-sea-shore.jpeg"
          alt="Photo"
        />
        <img src="./pics/istockphoto-537241730-612x612.jpg" alt="Photo" />
        <img
          src="./pics/240_F_950817662_E3iJl2GP4ma1hPDkJWuPVUAuHjC21QBs.jpg"
          alt="Photo"
        />
      </div>
    </div>
    </div>
  )
}
