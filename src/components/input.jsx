import React from "react";
import { useState } from "react";

const Input = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <form>
        <input
          value={note.title}
          type="text"
          placeholder="Title of MaxNote..."
          name="title"
          onChange={handleChange}
        />
        <p>
          <textarea
            value={note.content}
            name="note"
            placeholder="Write your note here..."
            onChange={handleChange}
          >
            {""}
          </textarea>
        </p>
      </form>
    </div>
  );
};

export default Input;
