interface Song {
  title: string;
  imageUrl: string;
  liked: Boolean;
}

type addToLiked = (selectedSong: Song) => void;
