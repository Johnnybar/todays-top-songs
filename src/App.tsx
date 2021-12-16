import React from "react";
import "./App.scss";
import { SongList } from "./SongList";

function App() {
  return (
    <>
      <header className="loudly-header">
        <div className="container">
          <div className="row">
            <h1 className="col-sm-12 loudly-header__heading">Loudly App</h1>
          </div>
        </div>
      </header>

      <SongList />
      <footer className="loudly-footer">
        <div className="container">
          <div className="row">
            <h4 className="col-sm-12 loudly-footer__text">
              Loudly: AI Powered, Royalty Free Music Solutions
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
