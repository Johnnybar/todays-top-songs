import React from "react";
import "./App.css";
import { SongListItem } from "./SongListItem";

const songs: Song[] = [
  {
    title: "testsong1",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMusical_note&psig=AOvVaw2wTMTKrDsbB6orGiH5wI7D&ust=1639654295633000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCor7Ta5fQCFQAAAAAdAAAAABAH",
  },
  {
    title: "testsong2",
    imageUrl:
      "https://image.shutterstock.com/image-vector/music-notes-song-melody-tune-260nw-701307613.jpg",
  },
];
function App() {
  return (
    <ul>
      <SongListItem song={songs[0]} />
      <SongListItem song={songs[1]} />
    </ul>
  );
}

export default App;
