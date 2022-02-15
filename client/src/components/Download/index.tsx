import DownloadFile from "./DownloadFile";
import Home from "../Home/Download";
import styles from "../Home/Home.module.css";

function Download() {
  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <DownloadFile />
      </div>
      <div className={styles.home}>
        <Home />
      </div>
    </div>
  );
}

export default Download;
