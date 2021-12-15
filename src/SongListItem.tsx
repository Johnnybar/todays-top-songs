import React from "react";

interface Props {
  song: Song;
  addToLiked: addToLiked;
}

export const SongListItem: React.FC<Props> = ({ song, addToLiked }) => {
  return (
    <li>
      <span style={{ color: song.liked ? "blue" : "red" }}>{song.title}</span>
      <img src={song.imageUrl} alt="" />

      <button
        onClick={() => {
          addToLiked(song);
        }}
      ></button>
    </li>
  );
};
