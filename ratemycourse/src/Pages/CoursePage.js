import React from "react";
// import { Grid } from "@mui/material";
import CourseRatingsCard from "../Components/CourseRatingsCard";
import './CoursePage.css'

const CoursePage = () => {
    return (
        <div className="container">
            <div className="course-header">
                <div className="course-rating-value-container">
                    <p style={{ fontSize: "60px" }}><b>5.0</b><sup style={{ fontSize: "20px", color: "#EB4D4D" }}><b>    /5</b></sup></p>
                </div>
                <div className="course-name-container">
                    <h1>Course Name</h1>
                </div>
                <div className="rate-course-button-container">
                    <button><b>Rate Course Name</b></button>
                </div>
                <hr />
            </div>
            <div className="course-ratings-body">
                <div className="course-ratings-list-container">
                    <CourseRatingsCard />
                </div>
            </div>
        </div >
    )
}
export default CoursePage;