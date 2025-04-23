import React from "react";
import styles from "./Button.module.scss";
import { ButtonType } from "./buttonType.ts";

const Button: React.FC<ButtonType> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
