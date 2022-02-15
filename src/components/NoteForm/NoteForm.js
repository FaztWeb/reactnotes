import { useState } from "react";
import "./NoteForm.css";

export const NoteForm = ({ addNote }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(text);
    setText("");
  };

  return (
    <form className="NoteForm" onSubmit={handleSubmit}>
      <input
        placeholder="my important note"
        className="noteInput"
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
      />
      <button className="noteButton">Save</button>
    </form>
  );
};
