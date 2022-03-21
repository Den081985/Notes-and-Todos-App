import React, { useState } from "react";
import { ModalBar } from "../Components/ModalBar";
import { ModalForm } from "../Components/ModalForm";
import { ModalContext } from "../Context/Modal/modalContext";

export const Modal = () => {
  const [modalActive, setModalActive] = useState(false);
  //функци получения записи из хранилища
  const getModalText = () => {
    const text = JSON.parse(localStorage.getItem("modal") || "[]").join("");
    return text;
  };
  let modaltext = getModalText();
  const [modalText, setModalText] = useState(modaltext);
  //функция удаления записей из хранилища
  const removeText = () => {
    localStorage.clear();
    setModalText("");
  };
  //функция закрытия модального окна
  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <ModalContext.Provider value={{ setModalText }}>
      <div className="modal-container">
        <ModalBar
          active={modalActive}
          setActive={setModalActive}
          removeText={removeText}
          closeModal={closeModal}
        >
          <h2 className="modal-title">Modal Window</h2>
          <p className="modal-text">{modalText}</p>
        </ModalBar>

        <ModalForm />
        <div className="modal-div">
          <button
            type="button"
            className="btn btn-dark mt-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => setModalActive(true)}
          >
            Open modal
          </button>
          <p className="btn-text mt-5">
            Push the button to see your modal message!
          </p>
        </div>
      </div>
    </ModalContext.Provider>
  );
};
