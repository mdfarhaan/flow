import React from "react";
import Lottie from "react-lottie";
import landing from "../../Assets/landing1.json";
import styles from "./Home.module.css";

function Download() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: landing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.body}>
      <div className={styles.info}>
        <h1>Flow</h1>
        <p>
          Download or Share your <strong>Files</strong>
        </p>
      </div>
      <Lottie options={lottieOptions} height={600} width={600} />
    </div>
  );
}

export default Download;
