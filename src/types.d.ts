interface Song {
  artist_name: string;
  name: string;
  cover_image_path: string;
  music_file_path: string;
  liked?: Boolean;
  id: number;
}

type addToLiked = (selectedSong: Song) => void;
