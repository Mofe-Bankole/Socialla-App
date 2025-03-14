import React from "react";
import './Stories.css';

function Stories(){
    return(
        <>
             <div class="stories-content">
        <div class="stories-navbar">
            <p class="header">Stories </p>
            <div><input type="text" placeholder="Search here." class="stories-search"/></div>
        </div>
        <div class="stories-divcards">
            <div class="story-divcard">
                {/* <!-- https://uitheme.shop/sociala/images/s-1.jpg --> */}
                <img src="https://images.pexels.com/photos/11556663/pexels-photo-11556663.jpeg?auto=compress&cs=tinysrgb&w=600" class="stories-main-img"/>
                <img src="" class="stories-profile-image"/>
            </div>
            <div class="story-divcard">
                <img src="https://images.pexels.com/photos/31075060/pexels-photo-31075060/free-photo-of-young-woman-posing-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600" class="stories-main-img"/>
                <img src="https://uitheme.shop/sociala/images/user-7.png" class="stories-profile-image"/>
            </div>
            <div class="story-divcard">
                <img src="https://images.pexels.com/photos/31029031/pexels-photo-31029031/free-photo-of-photographer-capturing-nature-in-porto-feliz.jpeg?auto=compress&cs=tinysrgb&w=600" class="stories-main-img"/>
                <img src="https://uitheme.shop/sociala/images/user-7.png" class="stories-profile-image"/>
            </div>
            <div class="story-divcard">
                <img src="https://images.pexels.com/photos/30989968/pexels-photo-30989968/free-photo-of-plumbeous-pigeons-perched-on-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600" class="stories-main-img"/>
                <img src="https://uitheme.shop/sociala/images/user-7.png" class="stories-profile-image"/>
            </div>
        </div>
    </div>
        </>
    );
}
export default Stories;