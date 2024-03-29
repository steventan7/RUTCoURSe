import React from "react";
import HomePageContent from "../Components/HomePageContent";
import Grid from "@mui/system/Unstable_Grid/Grid";
import LeftSlideShow from "../Components/LeftSlideShow";

const HomePage = () => {
  return (
    
    <div>
      <HomePageContent/>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="gridContainer"
        direction="column"
      >
        <Grid>
        <LeftSlideShow/>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;