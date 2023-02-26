import React from "react";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <div>
    {/* // <div className={styles.glow}></div> */}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="gridContainer"
        direction="column"
      >
        <Grid item>
            <h1>RateMyCourse</h1><br></br>
            <p>Enter your class to get started</p>
        </Grid>
        {/* <Grid item>
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
        </Grid> */}
      </Grid>
    </div>
  );
};

export default HomePage;