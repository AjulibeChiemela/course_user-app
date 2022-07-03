import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const classes = `${styles.button_gen} ${props.className}`;
  return (
    <button
      className={classes}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
