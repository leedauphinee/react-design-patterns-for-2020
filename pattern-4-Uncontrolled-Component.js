import React, { useState, useRef } from "react";

export default function App() {
  const inputEl = useRef(null);

  const handleSubmit = event => {
    alert("A name was submitted: " + inputEl.current.value);
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={inputEl} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
