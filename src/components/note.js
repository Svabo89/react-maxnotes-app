import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, header, text, date }) => {
  return (
    <div className="title">
      <h3>{header}</h3>
      <div className="note">
      <span>{text}</span>
      </div>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" size="1.1em" />
      </div>
    </div>
  );
};
export default Note;
