import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState();

  const handleSubmit = event => {
    alert("A name was submitted: " + name);
    event.preventDefault();
  };

  const handleChange = event => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
