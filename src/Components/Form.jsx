import React, { useState, useContext } from "react";
import { AlertContext } from "../Context/Alert/alertContext";
import { FirebaseContext } from "../Context/Firebase/firebaseContext";

export const Form = () => {
  const alert = useContext(AlertContext);
  const { addNote } = useContext(FirebaseContext);
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addNote(value.trim());
      alert.show("Notice created", "secondary");
      setValue("");
    } else {
      alert.show("Please type a notice", "danger");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-floating mb-4">
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Input your note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="floatingPassword">Note</label>
      </div>
    </form>
  );
};
