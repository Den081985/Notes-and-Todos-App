import React from "react";

export const ModalBar = ({
  active,
  setActive,
  children,
  removeText,
  closeModal,
}) => {
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
          onClick={() => closeModal()}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-dark remove-btn"
          onClick={() => removeText()}
        >
          Delete text
        </button>
        {children}
      </div>
    </div>
  );
};
