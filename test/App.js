import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  initIndexedDb,
  addToDatabase,
  exportAllDatabase,
} from "./db/indexedDb";

function App() {
  const handleCreateDexie = () => {
    axios.get("/db.json").then((response) => {
      const json = response.data;
      initIndexedDb(json);
    });
  };
  return (
    <div className="App">
      <button onClick={handleCreateDexie}>handleCreateDexie</button>
      <button onClick={addToDatabase}>add to database</button>
      <button onClick={exportAllDatabase}>exportAllDatabase</button>
    </div>
  );
}

export default App;
