import React from "react"
import './CourseRatingsCard.css'

const CourseRatingsCard = (props) => {
    return (
        <div className="card-container">
            <div className="rating-value-container">
                <p><b>Quality</b></p>
                <h2>1</h2>
            </div>
            <div className="rating-text-container">
                <p>Projects were easy. Exams were hard.</p>
            </div>
            <div className="rating-feedback-container">
                <img src="like_button.png" width="25" height="25" />
                <p>0</p>
                <img src="dislike_button.png" width="25" height="25" />
                <p>0</p>
            </div>
        </div>
    )
}

export default CourseRatingsCard;