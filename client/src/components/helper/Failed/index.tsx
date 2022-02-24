import styles from "./Failed.module.css";
import failedImg from "../../../Assets/success.png";

interface failedProps {
  error: string;
}

const Failed = ({ error }: failedProps) => {
  return (
    <div className={styles.container}>
      <img src={failedImg} alt="failedImg" className={styles.errImg} />
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Failed;
