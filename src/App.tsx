import React from "react";
import "./App.scss";
import { SongList } from "./SongList";

function App() {
  return (
    <>
      <header className="loudly-header">
        <h1 className="loudly-header__heading">Who Charted</h1>
      </header>
      <div className="loudly-content-wrapper">
        <SongList />
      </div>
      <footer className="loudly-footer">
        <p className="loudly-footer__text text-center">
          Who Charted: Top Tracks of the Day
        </p>
      </footer>
    </>
  );
}

export default App;
