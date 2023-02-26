import React from "react"
import './CourseRatingsCard.css'

const CourseRatingsCard = (props) => {
    return (
        <div className="card-container">
            <div>
                <h2>5</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src="../public/like_button.png" />
                <img src="../public/dislike_button.png" />
            </div>
        </div>
    )
}

export default CourseRatingsCard;