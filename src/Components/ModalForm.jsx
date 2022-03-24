import React, { useContext, useState } from "react";
import { AlertContext } from "../Context/Alert/alertContext";
import { ModalContext } from "../Context/Modal/modalContext";

export const ModalForm = () => {
  const [value, setValue] = useState("");

  const { setModalText } = useContext(ModalContext);

  const alert = useContext(AlertContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getFromStorage = () => {
    return JSON.parse(localStorage.getItem("modal") || "[]");
  };

  const putToStorage = (modaltext) => {
    const modals = getFromStorage();
    modals.push(modaltext);
    localStorage.setItem("modal", JSON.stringify(modals));
  };

  const submitHandler = (e) => {
    if (value) {
      e.preventDefault();
      putToStorage(value);
      alert.show(
        "Your modal message seccesfully saved.Push the button below to see your message!",
        "success"
      );
      setValue("");
      setModalText(value);
    } else {
      e.preventDefault();
      alert.show("Put your modal message before submit!", "danger");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Modal text
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={value}
          onChange={handleChange}
        />
        <div id="emailHelp" className="form-text">
          Put your modal message!
        </div>
      </div>

      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
};
