import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Note = ({ notes, removeNote }) => {
  return (
    <TransitionGroup component={"ul"} className="list-group">
      {notes.map((note) => (
        <CSSTransition classNames={"note"} key={note.id} timeout={800}>
          <li className="list-group-item note" key={note.id}>
            <div>
              <strong>{note.title}</strong>
              <small>{new Date().toLocaleDateString()}</small>
            </div>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => removeNote(note.id)}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
