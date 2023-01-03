import { MdDeleteForever } from "react-icons/md";

const Note = () => {
  return (
    <div className="note">
      <h3>First note</h3>
      <span>This is the first note</span>
      <div className="note-footer">
        <small>02/01/2023</small>
        <MdDeleteForever className="delete-icon" size="1.1em" />
      </div>
    </div>
  );
};
export default Note;
