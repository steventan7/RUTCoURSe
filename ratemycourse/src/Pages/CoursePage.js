import React from "react";
// import { Grid } from "@mui/material";
import CourseRatingsCard from "../Components/CourseRatingsCard";

const CoursePage = () => {
    return (
        <div className="container">
            <div className="course-header">
                <h1>5.0/5</h1>
                <h2>Course Name</h2>
                <div>
                    <button>Rate Course Name</button>
                </div>
            </div>
            <div className="course-ratings-body">
                <div className="course-ratings-list-container">
                    <CourseRatingsCard />
                </div>
            </div>
        </div>
    )
}
export default CoursePage;