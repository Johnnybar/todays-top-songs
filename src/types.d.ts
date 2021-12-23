interface Song {
  artist_name: string;
  name: string;
  cover_image_path: string;
  music_file_path: string;
  liked: Boolean;
  id: number;
}

type likeSong = (selectedSong: Song) => void;

type Optional<T> = T | null;

type SongList = { render: () => void };
