import React from "react";
import Search from "../Pages/Search";
import Box from '@mui/material/Box';
import styles from "./HomePageContent.module.css";
import LeftSlideShow from "../Components/LeftSlideShow"

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        ...sx,
      }}
      {...other}
    />
  );
}

const HomePageContent = () => {
  return (
    
    <div className={styles.body}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'stretch',
          p: 1,
          m: 1,
          backgroundColor: "space-around",
          color:"white",
          fontSize: 20,
          fontFamily: 'Poppins',
        }}
      >
        <Item><LeftSlideShow/></Item>
        <Item><Search /></Item>
        <Item></Item>
      </Box>
    </div>
  );
};

export default HomePageContent;