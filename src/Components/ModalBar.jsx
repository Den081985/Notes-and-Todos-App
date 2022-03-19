import React, { useContext } from "react";
import { ModalContext } from "../Context/Modal/modalContext";

export const ModalBar = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? `modal active` : `modal`}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? `modal-container active` : `modal-container`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="btn btn-dark modal-btn"
          onClick={() => setActive(false)}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
