import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.scss";

const UserList = (props) => {
  return (
    <div>
      {props.data.map((item) => {
        return (
          <Card key={item.id}>
            <div
              className={styles.div}
            >{`${item.username} (${item.age} years old)`}</div>
          </Card>
        );
      })}
    </div>
  );
};

export default UserList;
