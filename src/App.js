import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Input from "./components/input";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
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
           onDelete={deleteNotes}
         />
       ))}
     </div>
   );
}
export default App;
