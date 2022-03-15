import React from "react";
import { SHOW_ALERT, HIDE_ALERT } from "../types";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";
import { useReducer } from "react";

//компонент AlertState возвращает Provider, позволяющий компонентам подписаться на его изменения и использовать текущий контекст

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  //функция появления алерта
  const show = (text, type = "success") => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type },
    });
  };
  //функция исчезновения алерта
  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <AlertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
