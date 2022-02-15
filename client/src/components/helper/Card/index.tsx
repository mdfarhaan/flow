import styles from "./Card.module.css";

interface CardProps {
  children: JSX.Element;
}

function Card({ children }: CardProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Card;
