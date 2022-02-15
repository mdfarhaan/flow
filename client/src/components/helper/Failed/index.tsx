import styles from "./Failed.module.css";
import failedImg from "../../../Assets/success.png";

interface failedProps {
  error: string;
}

const Failed = ({ error }: failedProps) => {
  return (
    <div className={styles.container}>
      <img src={failedImg} alt="failed" height="130" />
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Failed;
