import React, { useMemo, useState } from "react";
import MyButton from "../components/UI/Button/MyButton";
import MyInput from "../components/UI/Input/MyInput";
import NotesList from "../components/NotesList";
import NotesItem from "../components/NotesItem";

const Main = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "First Note!", date: "20/11/2022" },
    { id: 2, text: "Second Note!", date: "22/11/2022" },
    { id: 3, text: "Third Note!", date: "24/11/2022" },
    { id: 4, text: "4!", date: "20/11/2022" },
    { id: 5, text: "5!", date: "22/11/2022" },
    { id: 6, text: "6!", date: "24/11/2022" },
  ]);

  const removeNote = (note) => {
    setNotes(notes.filter((p) => p.id !== note.id));
  };

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  let sortedNotes = useMemo(() => {
    if (selectedSort) {
      return [...notes].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return notes;
  }, [selectedSort, notes]);

  let searchedNotes = useMemo(() => {
    return sortedNotes.filter(
      (note) =>
        note.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.date.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedNotes]);

  return (
    <>
      <header>
        <div className="top-menu">
          <h1 className="top-menu__tytle">Notes</h1>
          <MyButton>Toggle Mode</MyButton>
        </div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
      </header>
      <main>
        <NotesList remove={removeNote} notes={searchedNotes} />
        {/* <NotesItem note={note} /> */}
      </main>
    </>
  );
};

export default Main;
