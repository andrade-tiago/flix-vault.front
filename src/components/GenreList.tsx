import IMDbGenre from "../interfaces/imdb-api/imdb-genre"

interface GenreListProps {
  genres: IMDbGenre[]
}

export default function GenreList({ genres }: GenreListProps) {
  return (
    <ul className="inline-flex gap-2 w-full flex-wrap">
      {genres.map(genre => (
        <li key={genre.id} className="border border-gray-500 py-1 px-2 rounded transition-colors hover:bg-amber-500 hover:text-gray-950 hover:border-transparent">
          {genre.name}
        </li>
      ))}
    </ul>
  )
}