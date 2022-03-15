import React, { useReducer } from "react";
import { SHOW_LOADER, ADD_NOTE, REMOVE_NOTE, FETCH_NOTES } from "../types";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import axios from "axios";

const url = "https://notesandtodos-app-default-rtdb.firebaseio.com";
export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  //функци полуения заметок с сервера
  const fetchNotes = async () => {
    showLoader();

    const response = await axios.get(`${url}/notesandtodos.json`);

    const payload = Object.keys(response.data).map((key) => {
      return {
        ...response.data[key],
        id: key,
      };
    });
    dispatch({ type: FETCH_NOTES, payload });
    console.log("notes", response.data);
  };
  //функция добавления заметки на сервер
  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };

    const response = await axios.post(`${url}/notesandtodos.json`, note);

    const payload = {
      ...note,
      id: response.data.name,
    };
    dispatch({
      type: ADD_NOTE,
      payload,
    });
  };
  //функция удаления заметки
  const removeNote = async (id) => {
    const response = await axios.delete(`${url}/notesandtodos/${id}.json`);
    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        fetchNotes,
        addNote,
        removeNote,
        notes: state.notes,
        loading: state.loading,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
