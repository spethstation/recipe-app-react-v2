import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Recipe App</h1>
        </header>
        <main>
          <Search />
        </main>
        <footer>Coded by Elspeth Humble</footer>
      </div>
    </div>
  );
}
