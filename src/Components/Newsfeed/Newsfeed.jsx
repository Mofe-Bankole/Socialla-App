import React, { useState } from "react";
import "./Newsfeed.css";
import Posts from "../Posts/Posts";
import Events from "../Events/Events";
import Lives from "../Lives/Lives";
import SuggestGroups from "../SuggestGroups/SuggestGroups";
function Newsfeed() {
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = async (e) => {
    try {
      e.preventdefault();
      const res = await fetch("http://localhost:5000/api/posts/post", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ postContent }),
      });

      res.status();
    } catch (error) {
      alert(error.response?.data?.error || "Post failed to upload");
    }
  };
  return (
    <>
      <div class="home-content">
        <div class="home-content-section1">
          <div class="items1">
            <div class="stories">
              <div class="story1 story1-empty">hi</div>
              <div class="story1">
                <img
                  src="https://images.pexels.com/photos/1204678/pexels-photo-1204678.png?auto=compress&cs=tinysrgb&w=600"
                  class="story1-img"
                />
              </div>
              <div class="story1">
                <img
                  src="https://images.pexels.com/photos/3692621/pexels-photo-3692621.jpeg?auto=compress&cs=tinysrgb&w=600"
                  class="story1-img"
                />
              </div>
              <div class="story1">
                <img
                  src="https://images.pexels.com/photos/10412892/pexels-photo-10412892.jpeg?auto=compress&cs=tinysrgb&w=600"
                  class="story1-img"
                />
              </div>
              <div class="story1">
                <img
                  src="https://images.pexels.com/photos/6831597/pexels-photo-6831597.jpeg?auto=compress&cs=tinysrgb&w=600"
                  class="story1-img"
                />
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="create-post-textarea-image"
            />
            <div class="create-post">
              <div class="create-post-header">
                <i class="fa fa-pencil create-post-icon" aria-hidden="true"></i>
                Create Post
              </div>
              <form onSubmit={handlePostSubmit} class="create-post-textarea">
                <input
                  placeholder="Make a Post..."
                  type="text"
                  onChange={(e) => setPostContent(e.target.value)}
                ></input>
              </form>
              <div class="create-post-items">
                <p>
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                  Live Video
                </p>
                <p>
                  <i class="fa fa-picture-o" aria-hidden="true"></i>
                  Photo/Video
                </p>
                <p>
                  <i class="fa fa-camera" aria-hidden="true"></i>
                  Feeling/Activity
                </p>
              </div>
            </div>
          </div>
          <div class="friend-request">
            <div class="friend-request-header">
              <p>Friend Request</p>
              <p>See all</p>
            </div>
            <div class="friend-request-person">
              <div class="friend-request-person-details">
                <img
                  src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=612x612&w=0&k=20&c=hEPh7-WEAqHTHdQtPrfEN9-yYCiPGKvD32VZ5lcL6SU="
                  class="friend-request-person-img"
                />
                <div class="friend-request-info">
                  <p class="friend-request-name subheader_font">
                    Amole Erioluwa
                  </p>
                  <p class="friend-request-mutual">Mutual Friends</p>
                </div>
              </div>
              <div class="friend-request-buttons">
                <button class="friend-request-button1">Confirm</button>
                <button class="friend-request-button2">Delete</button>
              </div>
            </div>

            {/* <!-- Person 2 --> */}

            <div class="friend-request-person">
              <div class="friend-request-person-details">
                <img
                  src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4="
                  class="friend-request-person-img"
                />
                <div class="friend-request-info">
                  <p class="friend-request-name subheader_font">
                    Amole Erioluwa
                  </p>
                  <p class="friend-request-mutual">Mutual Friends</p>
                </div>
              </div>
              <div class="friend-request-buttons">
                <button class="friend-request-button1">Confirm</button>
                <button class="friend-request-button2">Delete</button>
              </div>
            </div>

            {/* <!-- person 3 --> */}

            <div class="friend-request-person">
              <div class="friend-request-person-details">
                <img
                  src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
                  class="friend-request-person-img"
                />
                <div class="friend-request-info">
                  <p class="friend-request-name subheader_font">
                    Amole Erioluwa
                  </p>
                  <p class="friend-request-mutual">Mutual Friends</p>
                </div>
              </div>
              <div class="friend-request-buttons">
                <button class="friend-request-button1">Confirm</button>
                <button class="friend-request-button2">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-content-section2">
          <Posts />
          <Events />
        </div>

        <div className="home-content-section3">
          <Lives />
          <SuggestGroups />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Newsfeed;
