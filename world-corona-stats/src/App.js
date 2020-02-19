import React from "react";
// import "./App.css";
import axios from "axios";
import SimpleMap from "./components/SimpleMap";
// import coronaData from "../server/index";

// pass corona data down as props

function App() {
  return (
    <div className="App">
      <SimpleMap />
      <h1>Let's make world corona stats</h1>
    </div>
  );
}

export default App;
