import { useState } from "react";
import "./App.scss";
import InvalidInput from "./components/modal/InvalidInput";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

function App() {
  const [userData, setUserData] = useState([]);
  const getUserData = (newUserData) => {
    setUserData((prevUserData) => {
      return [...prevUserData, newUserData];
    });
  };
  const [isValid, setIsValid] = useState(true);
  const handleValidation = () => {
    setIsValid(false);
  };
  const handleModalRemove = () => {
    setIsValid(true);
  };
  const [validAge, setValidAge] = useState(true);
  const validateAge = () => {
    setValidAge(false);
  };
  return (
    <div className="App">
      <UserForm
        onAddUser={getUserData}
        onCheckValidate={handleValidation}
        onValidateAge={validateAge}
      />
      <UserList data={userData} />
      {!isValid && (
        <InvalidInput onExitModal={handleModalRemove} validAge={validAge} />
      )}
    </div>
  );
}

export default App;
