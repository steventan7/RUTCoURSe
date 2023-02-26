import React from "react";
import Search from "../Pages/Search";
import styles from "./HomePageContent.module.css";
const HomePageContent = () => {
  return (
    
    <div className={styles.body}>
      <Search />
    </div>
  );
};

export default HomePageContent;