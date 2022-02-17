import styles from "./Line.module.css";

function Vertical() {
  return (
    <div>
      <div className={styles.verticalLineContainer}>
        <div className={styles.verticalLine}></div>
        <div className={styles.verticalLine}></div>
        <div className={styles.verticalLine}></div>
        <div className={styles.verticalLine}></div>
      </div>
    </div>
  );
}

export default Vertical;
