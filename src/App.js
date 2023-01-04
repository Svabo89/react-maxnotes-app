import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      header: "My new note",
      text: "This is my first note",
      date: "02/01/2023",
    },
    {
      id: nanoid(),
      header: "My new note",
      text: "This is my second note",
      date: "02/01/2023",
    },
    {
      id: nanoid(),
      header: "My new note",
      text: "This is my third note",
      date: "02/01/2023",
    },
    {
      id: nanoid(),
      header: "My new note",
      text: "This is my fourth note",
      date: "02/01/2023",
    },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};
export default App;
