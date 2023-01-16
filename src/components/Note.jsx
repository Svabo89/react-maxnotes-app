import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
function TrashLabel({ onClick }) {
  return (
    <div className="trash-label" onClick={onClick}>
      <img src="trash-icon.svg" alt="Trash Icon" />
    </div>
  );
}
function Note({ title, content, onDelete, id, onEdit }) {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="delete" onClick={() => onDelete(id)}>
        <MdDelete size={20} />
      </button>
      <button className="edit" onClick={() => onEdit(id, { title, content })}> <MdEdit size={20}/> </button>
    </div>
  );
}
export default Note;
