import React from "react"
import './CourseRatingsCard.css'

const CourseRatingsCard = (props) => {
    return (
        <div className="card-container">
            <div className="rating-value-container">
                <p><b>Quality</b></p>
                <h2>5</h2>
            </div>
            <div className="rating-text-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="rating-feedback-container">
                <img src="like_button.png" width="25" height="25" />
                <p>5</p>
                <img src="dislike_button.png" width="25" height="25" />
                <p>0</p>
            </div>
        </div>
    )
}

export default CourseRatingsCard;