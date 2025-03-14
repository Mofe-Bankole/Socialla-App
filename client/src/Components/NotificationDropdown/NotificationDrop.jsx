import React, { useState, useRef, useEffect } from "react";
import { FaRegBell } from "react-icons/fa";
import "./NotificationDrop.css"; 

const NotificationDropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle notification dropdown
    const toggleDropdown = () => {
        setOpen(!open);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="notification-container" ref={dropdownRef}>
            {/* Notification Bell Icon */}
            <button onClick={toggleDropdown} className="notification-icon">
                <FaRegBell className="noti-icon" />
                <span className="dot"></span>
            </button>

            {/* Notification Box */}
            {open && (
                <div className="notification-dropdown">
                    <h3>Notification</h3>

                    {/* Notification Items */}
                    <div className="notification-item">
                        <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=612x612&w=0&k=20&c=hEPh7-WEAqHTHdQtPrfEN9-yYCiPGKvD32VZ5lcL6SU=" alt="User" className="noti-img"/>
                        <div className="text">
                            <strong>Hendrix Stamp</strong>
                            <p>There are many variations of pass...</p>
                        </div>
                        <span className="time">3 min</span>
                    </div>

                    <div className="notification-item">
                        <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4=" alt="User" className="noti-img"/>
                        <div className="text">
                            <strong>Goria Coast</strong>
                            <p>Mobile Apps UI Designer is require...</p>
                        </div>
                        <span className="time">2 min</span>
                    </div>

                    <div className="notification-item">
                        <img src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ=" alt="User" className="noti-img"/>
                        <div className="text">
                            <strong>Surfiya Zakir</strong>
                            <p>Mobile Apps UI Designer is require...</p>
                        </div>
                        <span className="time">1 min</span>
                    </div>

                    <div className="notification-item">
                        <img src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=" alt="User" />
                        <div className="text">
                            <strong>Victor Erixon</strong>
                            <p>Mobile Apps UI Designer is require...</p>
                        </div>
                        <span className="time">30 sec</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;
