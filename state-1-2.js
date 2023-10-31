import { useState } from "react";

export default function EditProfile() {
  const [isInput, setIsInput] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsInput(!isInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <b style={{ display: isInput ? "none" : "block" }}>{firstName}</b>
        <input
          onInput={handleFirstNameChange}
          style={{ display: isInput ? "block" : "none" }}
        />
      </label>
      <label>
        Last name:
        <b style={{ display: isInput ? "none" : "block" }}>{lastName}</b>
        <input
          onInput={handleLastNameChange}
          style={{ display: isInput ? "block" : "none" }}
        />
      </label>
      <button type="submit">{isInput ? "Save Profile" : "Edit Profile"}</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
