import React from "react";
import styles from "./BottomBanner.module.css";

const BottomBanner = () => {
  return (   
    <div>
    <ul class={styles.wordSlider}>
        <li>Engaging</li>
        <li>Delightful</li>
        <li>Friendly</li>
        <li>Engaging</li>
    </ul>
    </div>
  );
};

export default BottomBanner;