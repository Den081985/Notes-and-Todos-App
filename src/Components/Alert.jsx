import React from "react";
import { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../Context/Alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  if (!alert.visible) {
    return null;
  } //in-принимает условие отображения компонента и запускает состояния входа или выхода

  return (
    <CSSTransition
      in={alert.visible}
      classNames={"alert"}
      timeout={{ enter: 500, exit: 350 }}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
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
    </CSSTransition>
  );
};
