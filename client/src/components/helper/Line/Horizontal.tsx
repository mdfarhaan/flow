import styles from "./Line.module.css";

function Horizontal() {
  return (
    <div className={styles.horizontalLineContainer}>
      <div className={styles.horizontalLine}></div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.horizontalLine}></div>
    </div>
  );
}

export default Horizontal;
