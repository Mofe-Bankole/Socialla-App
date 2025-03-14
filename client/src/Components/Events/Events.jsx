import React from 'react'
import './Events.css'
export default function Events() {
  return (
    <div>
        <div class="event-card">
        <div class="event-header">
            <h2>Event</h2>
            <a href="#">See all</a>
        </div>
        <div class="event">
            <div class="event-date lavender">
                <span>FEB</span>
                <span>22</span>
            </div>
            <div class="event-details">
                <h3>Meeting with clients</h3>
                <p>41 Madison Ave, Floor 24, New York, NY 10010</p>
            </div>
        </div>
        <div class="event">
            <div class="event-date pink">
                <span>APR</span>
                <span>30</span>
            </div>
            <div class="event-details">
                <h3>Developer Programme</h3>
                <p>41 Madison Ave, Floor 24, New York, NY 10010</p>
            </div>
        </div>
        <div class="event">
            <div class="event-date teal">
                <span>APR</span>
                <span>23</span>
            </div>
            <div class="event-details">
                <h3>Anniversary Event</h3>
                <p>41 Madison Ave, Floor 24, New York, NY 10010</p>
            </div>
        </div>
    </div>
    </div>
  )
}
