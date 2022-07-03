import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const classes = `${styles.card_wrap} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
