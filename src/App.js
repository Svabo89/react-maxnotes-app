import NotesList from "./components/NotesList";
import { useState } from "react"; // this provides a hook that allows us to use state in functional components
import { nanoid } from "nanoid";// this provides a unique id for each note
const App = () => {
  const [notes, setNotes] = useState([{ //this function allows us to use state in functional components
    id: nanoid(), // this provides a unique id for each note
    titel: "My new note",
    text: "This is my note",
    date: "02/01/2023",
  }]); // this is a hook that allows us to use state in functional components
  return (
    <div className="container">
      <NotesList />
    </div>
  );
};

export default App;
