import { twMerge } from "tailwind-merge"
import PlayButton from "./PlayButton"
import Rating from "./Rating"
import MovieOverview from "@/classes/movie-overview"
import { MovieData } from "./MovieData"
import formatMinutes from "@/utils/format-minutes"

interface CardProps {
  movie: MovieOverview
}

export default function MovieCard({ movie }: CardProps) {
  return (
    <div
      className="group w-44 hover:-translate-y-1 focus-within:-translate-y-1
      transition-transform duration-200 flex flex-col gap-1 text-gray-400"
    >
      <div className="h-64 rounded-xl overflow-hidden relative">
        {movie.posterURL && (
          <img
            src={movie.posterURL} alt=""
            className="absolute w-full h-full object-cover -z-10 top-0 left-0"
          />
        )}

        <div
          className="w-full h-full p-3 bg-gray-950/70 backdrop-blur-xl
          opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100
          flex flex-col justify-between items-center gap-2"
        >
          <p
            className={twMerge(
              'line-clamp-[7]',
              movie.overview ? 'text-gray-100' : 'text-gray-400',
            )}
          >
            {movie.overview || 'Sinopse indisponível'}
          </p>

          <PlayButton movieId={movie.id} />
        </div>
      </div>

      <h3 className="font-medium w-full truncate" title={movie.title}>
        {movie.title}
      </h3>

      <MovieData.Root className="w-full text-sm">
        <MovieData.Item>{movie.year}</MovieData.Item>
        <MovieData.Item>{formatMinutes(movie.runtime)}</MovieData.Item>
        <MovieData.Item><Rating value={movie.rating} /></MovieData.Item>
      </MovieData.Root>
    </div>
  )
}
