import React from "react";
import "./App.scss";
import { SongList } from "./SongList";

function App() {
  return (
    <>
      <header className="loudly-header">
        <h1 className="col-sm-12 loudly-header__heading">Loudly App</h1>
      </header>
      <div className="loudly-content-wrapper">
        <SongList />
      </div>
      <footer className="loudly-footer">
        <p className="loudly-footer__text text-center">
          Loudly: AI Powered, Royalty Free Music Solutions
        </p>
      </footer>
    </>
  );
}

export default App;
