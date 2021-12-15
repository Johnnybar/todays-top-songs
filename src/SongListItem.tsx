import React from "react";

interface Props {
  song: Song;
}

export const SongListItem: React.FC<Props> = ({ song }) => {
  return (
    <li>
      <span>{song.title}</span>
      <img src={song.imageUrl} alt="" />
    </li>
  );
};
