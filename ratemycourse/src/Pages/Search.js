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
      .then(res => res.json()) // It resolves the promise with a JSON object
      .then(res => {
        console.log(res) // make sure that matches is `res` directly or a neste object within `res` object
        this.setState({
          matches: res,
          loading: false
        })
      })
  }

  render() {
    
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
          </Grid>
          <Grid item>
            <b><p>Enter your class to get started</p></b>
          </Grid>
          <Dropdown courses = {this.state.courses.name}/>
        </Grid>
      </div>
    );
  }
}

export default Search;