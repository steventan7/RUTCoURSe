import React from "react";
import { Grid } from "@mui/material";
import CourseRatingsCard from "../Components/CourseRatingsCard";
import './CoursePage.css';
import { API_REVIEWS } from "../constants";
import { useState } from "react";
import axios from "axios";


const CoursePage = (props) => {
    // const [review, setReview] = {}
    // const getReviews = () => {
    //     axios.get(API_REVIEWS).then(res => res.json()).then((res) => {
    //         setReview(res[0])
    //     })
    // }
    // getReviews();
    return (
        <div className="container">
            <div className="course-header">
                <div className="course-rating-value-container">
                    <p style={{ fontSize: "60px" }}><b>1.0</b><sup style={{ fontSize: "20px", color: "#EB4D4D" }}><b>    /5</b></sup></p>
                </div>
                <div className="course-name-container">
                    <h1>Software Methodology</h1>
                </div>
                <div className="rate-course-button-container">
                    <button><b>Rate Software Methodology</b></button>
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