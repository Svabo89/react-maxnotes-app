import React from "react";

function Note(title, content, id) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};
export default Note;
