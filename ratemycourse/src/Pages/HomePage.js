import React from "react";
import HomePageContent from "../Components/HomePageContent";
import LeftSlideShow from "../Components/LeftSlideShow";
import Grid from "@mui/system/Unstable_Grid/Grid";
import BottomBanner from "../Components/BottomBanner";

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
        <Grid>
          <BottomBanner/>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;