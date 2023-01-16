import React from "react";
import { MdDelete } from "react-icons/md";

function TrashLabel({ onClick }) {
  return (
    <div className="trash" onClick={onClick}>
      <h3>TRASH</h3>
      <MdDelete size={30} />
    </div>
  );
}

export default TrashLabel;
