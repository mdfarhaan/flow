import styles from "./Line.module.css";

function Horizontal() {
  return (
    <div>
      <div className={styles.horizontalLineContainer}>
        <div className={styles.horizontalLine}></div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.horizontalLine}></div>
      </div>
    </div>
  );
}

export default Horizontal;
