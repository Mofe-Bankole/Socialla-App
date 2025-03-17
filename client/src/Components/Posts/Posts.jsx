import React from "react";
import { FaRegThumbsUp, FaRegComment } from "react-icons/fa";
import "./Posts.css";
export default function Posts() {

    const [postContent, setPostContent] = useState();
    const renderPosts = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/post/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ postContent }),
        });

        res.status();
  };
  return (
    <div>
      <div class="post-container">
        <div class="post-header">
          <div class="name-area">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="post-header-img"
            />
            <div class="names">
              <p>Amole Erioluwa</p>
              <p>5 hours ago</p>
            </div>
          </div>
          <p class="more-button">...</p>
        </div>
        <div class="post-texts">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aspernatur id iure quis accusamus commodi officia explicabo eos
            expedita minus minima, nam assumenda sunt quibusdam corporis
            doloremque optio nostrum cupiditate quas modi omnis quisquam? Ipsum
            placeat rem perferendis facere illo!
          </p>
        </div>
        <div class="post-images">
          <img src="" />
        </div>
        <div class="featured-actions">
          <p>
            <FaRegThumbsUp /> 10 Likes
          </p>
          <p>
            <FaRegComment /> 13 comments
          </p>
        </div>
      </div>
    </div>
  );
}
