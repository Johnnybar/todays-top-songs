import React, { ReactElement } from "react";
import { AudioPlayer } from "./AudioPlayer";

interface Props {
  song: Song;
  likeSong: likeSong;
}
export function SongListItem({ song, likeSong }: Props): ReactElement {
  return (
    <li className="row">
      <div className="col-sm-2 text-center">
        <img
          className="img-circle"
          style={{ width: "100px", height: "100px" }}
          src={song.cover_image_path}
          alt=""
        />
      </div>
      <div
        className="col-sm-10 text-center "
        style={{ color: song.liked ? "blue" : "red" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <h4>{song.name}</h4>
              <p>{song.artist_name}</p>
            </div>
            <div className="col-sm-2">
              <AudioPlayer audio={song.music_file_path} />
              <button
                type="button"
                name="Like"
                onClick={() => {
                  likeSong(song);
                }}
              >
                Like this track
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
