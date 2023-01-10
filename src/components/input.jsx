import React from "react";
import { useState } from "react";

function Input(props) {
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
            name="content"
            placeholder="Write your note here..."
            onChange={handleChange}
          >
            {""}
          </textarea>
        </p>
      </form>
    </div>
  );
}

export default Input;
