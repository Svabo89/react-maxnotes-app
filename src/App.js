import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Input from "./components/Input";
import Note from "./components/Note";

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
    return (
      <div className="App">
        <Header />
        <Input onAdd={addNote} />
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>
    );
}
export default App;
