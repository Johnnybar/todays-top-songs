import React, { ReactElement } from "react";

interface Props {
  audio: string;
}
export function AudioPlayer({ audio }: Props): ReactElement {
  return (
    <audio className="loudly-song-list-item__audio-player" controls src={audio}>
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  );
}
