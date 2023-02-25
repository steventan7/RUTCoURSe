import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.background}>
    {/* // <div className={styles.glow}></div> */}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="gridContainer"
        direction="column"
      >
        <Grid item>
            <b><p className={styles.welcome}>Welcome! My name is Steven Tan.</p></b>
            <br></br>
        </Grid>
        <Grid item>
          <Button
            onClick={() => navigate("/about-me")}
            variant="outlined"
            sx={{
              fontFamily: 'EB Garamond',
              color: "white",
              borderColor: "white",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#3c52b2",
              },
            }}
          >
            View my work
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;