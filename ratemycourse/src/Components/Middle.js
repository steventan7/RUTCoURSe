import React from "react";
import styles from "./Middle.module.css"
import LeftSlideShow from "./LeftSlideShow";
import Grid from "@mui/system/Unstable_Grid/Grid";
const Middle = () => {
  return (   
    <div className={styles.body}>
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

export default Middle;