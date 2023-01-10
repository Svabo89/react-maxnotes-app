import React from "react";
import { useState } from "react";

function Input(submitNote, onAdd) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    onAdd(note);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          value={note.title} 
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <p>
          <textarea
            value={note.content}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
          >
          </textarea>
        </p>
        <button onClick={submitNote}>Close</button>
      </form>
    </div>
  );
}

export default Input;
