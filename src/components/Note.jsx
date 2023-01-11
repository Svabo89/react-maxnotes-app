import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Note({ title, content, onDelete, id, editMode }) {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="delete" onClick={() => onDelete(id)}>
        <MdDelete size={20} />
      </button>
      <button className="edit" onDoubleClick={() => editMode(id)}>
        <MdEdit size={20} />
      </button>
    </div>
  );
}
export default Note;
