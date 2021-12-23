import React, { useEffect, useState } from "react";
import { SongListItem } from "./SongListItem";

export const SongList = () => {
  const [allSongs, setSongs] = useState<Optional<Song[]>>();
  const [listIsUpdated, setListisUpdated] = useState<Boolean>(false);

  //retrieve song list, update after POST request
  useEffect(() => {
    fetch(`https://api-stg.jam-community.com/song/trending`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setSongs(response as Song[]);
      })
      .catch((error) => console.log(error));
  }, [listIsUpdated]);

  //send POST request on like, set listIsUpdated to true => run GET request again
  const likeSong = (selectedSong: Song) => {
    if (allSongs) {
      const songToLike = allSongs.filter((song) => song === selectedSong);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${songToLike[0].id}`,
      };

      const queryString = "apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8";
      fetch(
        `https://api-stg.jam-community.com/interact/like?${queryString}`,
        requestOptions
      )
        .then(() => {
          setListisUpdated(!listIsUpdated);
        })
        .catch((error) => console.log("an error has occurred: ", error));
    }
  };

  return (
    <div className="loudly-song-list container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1 className="loudly-song-list__top-heading">Top 6 Songs</h1>
        </div>
      </div>
      <ul className="loudly-song-list__list row">
        {allSongs ? (
          allSongs.map((song: Song) => (
            <SongListItem key={song.id} song={song} likeSong={likeSong} />
          ))
        ) : (
          <h1 className="text-center">Please wait while songs are loading</h1>
        )}
      </ul>
    </div>
  );
};
