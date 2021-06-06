import React, { useState, useRef } from "react";
import "./App.css";


function App() {


const [inputlist, setInputList] = useState([]);

const inputRef = useRef();

const addItem = () => {
  const newItem = inputRef.current.value;
  inputRef.current.value="";
  setInputList([...inputlist, newItem]);
};

const keyPressFunc = (event) => {
  if (event.key === "Enter") {
    addItem();
  }
};

const itemMapper = (element) => {
  return <li>{element}</li>;
};


  return (
    <div className="container">
      <h1>Grocery List App</h1>
      <div className="card">
        <div className="input">
          <input
            placeholder="Enter your items"
            ref={inputRef}
            onKeyPress={keyPressFunc}
          />
          <button onClick={addItem}>Add</button>
        </div>
        <div className="outputdisplay">
          <ul>{inputlist.map(itemMapper)}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
