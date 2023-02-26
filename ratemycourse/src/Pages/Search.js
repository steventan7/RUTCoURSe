import React from "react";
import { Grid } from "@mui/material";
import styles from "./HomePage.module.css";
import Dropdown from "../Components/Dropdown";

const HomePage = () => {
  const options = [{},
    // { value: "green", label: "Green" },
    // { value: "blue", label: "Blue" },
    // { value: "red", label: "Red" },
    // { value: "yellow", label: "Yellow" },
    // { value: "orange", label: "Orange" },
    // { value: "pink", label: "Pink" },
    // { value: "purple", label: "Purple" },
    // { value: "grey", label: "Grey" }
  ];
  return (
    
    <div className={styles.body}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="gridContainer"
        direction="column"
      >
        <Grid item>
            <img src="rutgers.png" alt="rutcourse" height="150px" width="150px"></img>
        </Grid>
        <Grid item>
          <p className={styles.text}>Enter your class to get started</p>
        </Grid>
        <Grid item>
        <Dropdown 
          isSearchable
          isMulti
          placeHolder="Select..."
          options={options}
          onChange={(value) => console.log(value)}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;