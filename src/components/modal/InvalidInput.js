import React from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./InvalidInput.module.scss";

const ModalContent = (props) => {
  return (
    <div className={styles.invalid_modal_wrap} onClick={props.onExitModal}>
      <Card className={styles.invalid_modal_card}>
        <h2>{props.validAge === false ? "Invalid Age" : "Invaid Input"}</h2>
        <p>
          {props.validAge === false
            ? "Please enter a valid age (> 0)."
            : "Please enter a valid name and age (non-empty values)."}
        </p>
        <Button className={styles.btn} onClick={props.onExitModal}>
          Okay
        </Button>
      </Card>
    </div>
  );
};
const InvalidInput = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalContent
          validAge={props.validAge}
          onExitModal={props.onExitModal}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default InvalidInput;
