import React from "react";
import MyButton from "./UI/Button/MyButton";

const NotesItem = (props) => {
  return (
    <div className="note">
      <p className="note__text">{props.note.text}</p>
      <div className="note__bottom">
        <div className="note__date">{props.note.date}</div>
        <MyButton onClick={() => props.remove(props.note)}></MyButton>
      </div>
    </div>
  );
};

export default NotesItem;
