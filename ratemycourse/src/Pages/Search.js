import React, { Component } from "react";
import { Grid } from "@mui/material";
import Dropdown from "../Components/Dropdown";
import styles from "../Pages/Search.module.css";
import { API_COURSES } from "../constants";

class Search extends Component {
  state = {
    courses: [],
    loading: true
  };
  componentDidMount() {
    console.log(API_COURSES);
    fetch(API_COURSES)
      .then(res => res.json()) 
      .then(res => {
        console.log(res) 
        this.setState({
          courses: res,
          loading: false
        })
      })
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }
    if (this.state.courses.length === 0) {
      return <div>There aren't any matches !</div>
    }
    return (
      <div className={styles.padding}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          className="gridContainer"
          direction="column"
        >
          <Grid item>
              <img className = {styles.image} src="rutgers.png" alt="rutcourse" height="150px" width="150px"></img>
              <br></br>
              <br></br>
          </Grid>
          <Grid item>
            <b><p>Enter your class to get started</p></b>
            <br></br>
          </Grid>
          <Dropdown suggestions = {this.state.courses.map(course => course.name)}/>
        </Grid>
      </div>
    );
  }
}

export default Search;