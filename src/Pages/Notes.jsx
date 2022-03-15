import React, { Fragment } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Form } from "../Components/Form";
import { Loader } from "../Components/Loader";
import { Note } from "../Components/Note";
import { AlertContext } from "../Context/Alert/alertContext";
import { FirebaseContext } from "../Context/Firebase/firebaseContext";

// const notes = new Array(3)
//   .fill("")
//   .map((_, i) => ({ id: i, title: `Note ${i + 1}` }));

export const Notes = () => {
  const { loading, notes, fetchNotes, removeNote } =
    useContext(FirebaseContext);

  const alert = useContext(AlertContext);

  const rmNote = (id) => {
    removeNote(id);
    alert.show("The note is deleted ", "danger");
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <Fragment>
      <Form />
      {loading ? <Loader /> : <Note notes={notes} removeNote={rmNote} />}
    </Fragment>
  );
};
