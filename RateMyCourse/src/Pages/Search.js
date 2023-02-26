import React from "react";
import { Grid } from "@mui/material";
import Dropdown from "../Components/Dropdown";

const Search = () => {
  return (
    
    <div>
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
          <b><p>Enter your class to get started</p></b>
        </Grid>
        <Dropdown suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}/>
      </Grid>
    </div>
  );
};

export default Search;