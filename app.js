import React from 'react';
import './App.css';
import Registration from "./registration";
import Login from "./login";

function App() {
  return (
    <div className="App">
      <h1>Open Source Initiative</h1>
      <Registration />
      <Login />
    </div>
  );
}

export default App;