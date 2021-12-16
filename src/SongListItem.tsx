import React, { ReactElement, useState, useEffect } from "react";

import { AudioPlayer } from "./AudioPlayer";

interface Props {
  song: Song;
  likeSong: likeSong;
}
export function SongListItem({ song, likeSong }: Props): ReactElement {
  const [color, setColor] = useState<Boolean>(false);

  useEffect(() => {}, [color]);
  return (
    <li className="loudly-song-list-item col-sm-4">
      <div className="container">
        <div className="loudly-song-list-item__top row">
          <img
            className="img-circle col-sm-4"
            src={song.cover_image_path}
            alt=""
          />
          <div className="col-sm-8">
            <h4 style={color ? { color: "red" } : { color: "blue" }}>
              {song.name}
            </h4>
            <p>{song.artist_name}</p>
          </div>
        </div>

        <div className="loudly-song-list-item__bottom row">
          <div className="col-sm-6 text-center ">
            <AudioPlayer audio={song.music_file_path} />
          </div>
          <div className="col-sm-6">
            <button
              type="button"
              name="Like"
              onClick={() => {
                likeSong(song);
                setColor(!color);
              }}
            >
              Like this track
              {color}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
