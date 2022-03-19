import React, { useContext, useState } from "react";
import { ModalBar } from "../Components/ModalBar";
// import { ModalForm } from "../Components/ModalForm";
// import { ModalContext } from "../Context/Modal/modalContext";

export const Modal = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="modal-container">
      <ModalBar active={modalActive} setActive={setModalActive}>
        <h2 className="modal-title">Modal Window</h2>
        <p>Just modal window that you called when pushed the button!</p>
      </ModalBar>
      {/* <ModalForm /> */}
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setModalActive(true)}
      >
        Open modal
      </button>
    </div>
  );
};
