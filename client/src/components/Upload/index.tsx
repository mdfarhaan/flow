import React from "react";
import SelectFile from "./SelectFile";
import Home from "../Home/Upload";
import styles from "../Home/Home.module.css";

function Upload() {
  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <SelectFile />
      </div>
      <div className={styles.home}>
        <Home />
      </div>
    </div>
  );
}

export default Upload;
