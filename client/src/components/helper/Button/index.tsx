import React from "react";
import styles from "./Button.module.css";

interface buttonProps {
  children: string;
  onClick: any;
}

const Button = ({ children, onClick }: buttonProps) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.btn}>
        {children}
      </button>
    </div>
  );
};

export default Button;
