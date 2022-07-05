//commented out is the same logic; but using state instead of refs
// import React, { useState } from "react";
import React, { useRef } from "react";
import styles from "./UserForm.module.scss";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = (props) => {
  // const [userName, setUsername] = useState("");
  // const [age, setAge] = useState("");

  // const handleUsername = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handleAgeInput = (e) => {
  //   setAge(e.target.value);
  //   e.target.value <= 0 && props.onValidateAge();
  // };

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const handleUserData = (e) => {
    e.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    enteredUserAge <= 0 && props.onValidateAge();

    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredUserAge <= 0
    ) {
      props.onCheckValidate();
      return;
    } else {
      const newUserData = {
        username: enteredUsername,
        age: enteredUserAge,
        id: Math.random().toString(),
      };
      props.onAddUser(newUserData);

      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }

    // if (userName.trim().length === 0 || age.trim().length === 0 || age <= 0) {
    //   props.onCheckValidate();
    //   return;
    // } else {
    //   const newUserData = {
    //     username: userName,
    //     age: age,
    //     id: Math.random().toString(),
    //   };
    //   props.onAddUser(newUserData);

    //   setUsername("");
    //   setAge("");
    // }
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
            // onChange={handleUsername}
            // value={userName}
            ref={nameInputRef}
          />
        </div>
        <div>
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            // onChange={handleAgeInput}
            // value={age}
            ref={ageInputRef}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
