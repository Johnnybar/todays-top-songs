import React, { ReactElement, useState, useEffect } from "react";

import { AudioPlayer } from "./AudioPlayer";
import { motion } from "framer-motion";

interface Props {
  song: Song;
  likeSong: likeSong;
}
export function SongListItem({ song, likeSong }: Props): ReactElement {
  const [clicked, setClicked] = useState<Boolean>(false);
  //add temporary notification when song has been liked
  useEffect(() => {
    const timer = setTimeout(() => setClicked(false), 3000);
    return () => clearTimeout(timer);
  }, [clicked]);

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: 0 }}
      className="loudly-song-list-item col-sm-6 col-md-4 "
    >
      <div
        className="loudly-song-list-item__container container"
        id="loudly-song-list-item__container-primary"
      >
        <div className="loudly-song-list-item__top row">
          <img
            className="col-sm-12 col-md-4 loudly-song-list-item__thumbnail"
            src={song.cover_image_path}
            alt="song-cover"
          />
          <div className="col-sm-12 col-md-8">
            <h4 className="loudly-song-list-item__title">{song.name}</h4>
            <p className="loudly-song-list-item__artist">{song.artist_name}</p>
          </div>
        </div>
        <div
          className="loudly-song-list-item__bottom row"
          id="loudly-song-list-item__bottom-primary"
        >
          <div className="col-md-12 col-lg-6">
            <AudioPlayer audio={song.music_file_path} />
          </div>
          <div className="col-md-12 col-lg-6">
            {/* like song on click and setClicked to true to enable temporary notification */}
            <motion.button
              className="loudly-song-list-item__like-button"
              type="button"
              name="Like"
              onClick={() => {
                likeSong(song);
                setClicked(true);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ rotate: "-40deg" }}
            >
              <i className="fa fa-thumbs-up"></i> Like
            </motion.button>
          </div>
        </div>
      </div>
      {clicked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: 0 }}
          className="loudly-song-list-item__liked-notification text-center"
        >
          {song.name} has been added to your Liked List
        </motion.div>
      )}
    </motion.li>
  );
}
