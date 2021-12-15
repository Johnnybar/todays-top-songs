import React, { ReactElement, useEffect, useState } from "react";
import { SongListItem } from "./SongListItem";

export function SongList(): ReactElement {
  const [allSongs, setSongs] = useState<Song[]>([]);
  useEffect(() => {
    fetch(`https://api-stg.jam-community.com/song/trending`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setSongs(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const addToLiked = (selectedSong: Song) => {
    const newSongs = allSongs.map((song) => {
      if (song === selectedSong) {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `id=${song.id}`,
        };
        const queryString =
          "apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8";
        fetch(
          `https://api-stg.jam-community.com/interact/like?${queryString}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log("an error has occurred: ", error));
        return {
          ...song,
          liked: !song.liked,
        };
      }
      return song;
    });
    setSongs(newSongs);
  };
  return (
    <ul>
      {allSongs.map((song) => (
        <SongListItem key={song.id} song={song} addToLiked={addToLiked} />
      ))}
    </ul>
  );
}
