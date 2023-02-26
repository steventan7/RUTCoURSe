import React from "react";
import { API_REVIEWS } from "../constants";

const ReviewForm = () => {
  return (
    <form action={API_REVIEWS} method="POST">
        <textarea id="reviewTxt" name="content" placeholder="Type your review here..."></textarea>
        <input type="hidden" name="course" value={this.state.course.id}></input>
        <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;