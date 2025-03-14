import React from "react"
import{FaComment, FaHome} from 'react-icons/fa'
import { FaBolt } from "react-icons/fa"
import{FaUser} from "react-icons/fa"
// import { FaBell } from "react-icons/fa"
import { FaCog } from "react-icons/fa"

import './Navbar.css'
import NotificationDrop from "../NotificationDropdown/NotificationDrop"
import SettingsDrop from "../SettingsDropdown copy/SettingsDrop"
function Navbar(){
return(
    <>
<div class="nav-container normal_font">
<div class="logo">
    <p class="header_font">SOCIALL</p></div>
<div class="nav-center">
    <div class="nav-search-bar"><i class="fa fa-search home-search" aria-hidden="true"></i>

        <input type="text" placeholder="start typing to search.."/>
    </div>
    <div class="icon1 home"><FaHome/></div>
    <div class="icon1 stories"><FaBolt/></div>
    <div class="icon1 groups"><FaUser/></div>
</div>
<div class="nav-end">
    <div class="icon2 notification"><NotificationDrop/></div>
    <div class="icon2 chats"><FaComment/></div>
    <div class="icon2 settings"><SettingsDrop/></div>
    <div class="icon2 profile"><img src="https://media.istockphoto.com/id/1389823037/vector/young-smiling-woman-mia-avatar-3d-vector-people-character-illustration-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=ciwsDqBIy3mcTxhWN4I1S-kKSTvjoN1einMrQawNZDQ=" className="icon2-img"/>
    </div>
</div>
</div>
</>
)
}

export default Navbar;
