import React from "react";
import { useContext } from "react";
import { AlertContext } from "../Context/Alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  if (!alert.visible) {
    return null;
  }
  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      <strong>Holy guacamole!</strong>
      &nbsp;{alert.text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={hide}
      ></button>
    </div>
  );
};
