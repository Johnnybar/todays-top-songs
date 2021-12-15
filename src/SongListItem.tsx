import React from "react";

interface Props {
  song: Song;
  addToLiked: addToLiked;
}

export const SongListItem: React.FC<Props> = ({ song, addToLiked }) => {
  return (
    <li>
      <span style={{ color: song.liked ? "blue" : "red" }}>{song.name}</span>
      <span>{song.artist_name}</span>
      <img src={song.cover_image_path} alt="" />

      <button
        onClick={() => {
          addToLiked(song);
        }}
      ></button>
    </li>
  );
};
