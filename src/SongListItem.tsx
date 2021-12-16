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
    <li className="loudly-song-list-item col-sm-6 col-md-4 ">
      <div
        className="loudly-song-list-item__container container"
        id="loudly-song-list-item__container"
      >
        <div className="loudly-song-list-item__top row">
          <img
            className="col-sm-12 col-md-4 loudly-song-list-item__thumbnail"
            src={song.cover_image_path}
            alt="song-cover"
          />
          <div className="col-sm-12 col-md-8">
            <h4
              style={color ? { color: "red" } : { color: "blue" }}
              className="loudly-song-list-item__title"
            >
              {song.name}
            </h4>
            <p className="loudly-song-list-item__artist">{song.artist_name}</p>
          </div>
        </div>

        <div
          className="loudly-song-list-item__bottom row"
          id="loudly-song-list-item__bottom"
        >
          <div className="col-sm-12 col-md-6 text-center ">
            <AudioPlayer audio={song.music_file_path} />
          </div>
          <div className="col-sm-12 col-md-6">
            <button
              className="loudly-song-list-item__like-button"
              type="button"
              name="Like"
              //set Animation here
              onClick={() => {
                likeSong(song);
                setColor(!color);
              }}
            >
              <i className="fa fa-thumbs-up"></i> Like{color}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
