import React, { useState } from "react";
import styles from "./UserForm.module.scss";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [userName, setUsername] = useState("");
  const [age, setAge] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleAgeInput = (e) => {
    setAge(e.target.value);
    e.target.value <= 0 && props.onValidateAge();
  };

  const handleUserData = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0 || age <= 0) {
      props.onCheckValidate();
      return;
    } else {
      const newUserData = {
        username: userName,
        age: age,
        id: Math.random().toString(),
      };
      props.onAddUser(newUserData);

      setUsername("");
      setAge("");
    }
  };

  return (
    <Card className={styles.form}>
      <form onSubmit={handleUserData}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleUsername}
            value={userName}
          />
        </div>
        <div>
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={handleAgeInput}
            value={age}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
