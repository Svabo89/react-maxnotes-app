import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Input from "./components/input";
import Note from "./components/Note";
function App(props) {
  return (
    <div>
      <Header />
      <Input />
      <Note />
    </div>
  );
};
export default App;
