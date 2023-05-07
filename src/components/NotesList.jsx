import React from "react";
import NoteNew from "./NoteNew";
import NotesItem from "./NotesItem";

const NotesList = ({ notes, remove }) => {
  console.log(notes);
  return (
    <div className="note__container">
      {notes.map((note) => (
        <NotesItem remove={remove} note={note} key={note.id} />
      ))}
      <NoteNew />
    </div>
  );
};

export default NotesList;
