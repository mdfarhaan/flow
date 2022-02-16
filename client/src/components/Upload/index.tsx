import SelectFile from "./SelectFile";
import styles from "../Home/Home.module.css";

function Upload() {
  return (
    <div className={styles.card}>
      <SelectFile />
    </div>
  );
}

export default Upload;
