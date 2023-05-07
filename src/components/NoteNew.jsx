import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";

function NoteNew() {
  const [noteText, setNoteText] = useState("");
  let characterLimit = 200;
  const handleChange = (event) => {
    if (event.target.value.length <= characterLimit) {
      setNoteText(event.target.value);
      console.log(event.target.value.length);
    }
  };
  return (
    <div className="note note__new">
      <textarea
        className="note__textarea"
        rows="8"
        cols="1"
        placeholder="Type new note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note__bottom">
        <div className="char-limit">
          {characterLimit - noteText.length} Remaining
        </div>
        {/* <MyButton onClick={() => props.remove(props.note)}></MyButton> */}
      </div>
    </div>
  );
}

export default NoteNew;
