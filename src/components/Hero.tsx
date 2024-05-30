import { ChevronDown } from "lucide-react"
import PlayButton from "./PlayButton"
import useMovieImages from "@/hooks/use-movie-images"
import Rating from "./Rating"
import MovieOverview from "@/models/movie-overview"

interface HeroProps {
  movie: MovieOverview
}

export default function Hero({ movie }: HeroProps) {
  const { data: movieImages } = useMovieImages(movie.id)

  return (
    <div className="relative pt-40 pb-20 bg-gradient-to-t from-gray-950 px-4">
      {movieImages?.backdrop && (
        <img
          src={movieImages.backdrop} alt=""
          className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-50"
        />
      )}

      <div className="max-w-2xl mx-auto flex items-center gap-5 flex-col">
        <h3 className="font-medium text-5xl text-center">
          {movieImages?.title ? (
            <img
              src={movieImages.title}
              alt={movie.title}
              title={movie.title}
              className="max-w-full"
            />
          ): movie.title}
        </h3>

        <ul className="flex gap-5 items-baseline">
          <li>{movie.year}</li>
          <li>{movie.runtime} min</li>
          <li><Rating value={movie.rating} /></li>
        </ul>

        <h4 className="font-medium uppercase tracking-widest text-sm -mb-4">
          Sinopse
        </h4>
        <p className="text-center text-gray-300">
          {movie.overview}
        </p>

        <PlayButton mediaType={movie.mediaType} mediaId={movie.id} className="shadow-amber-500" />

        <ChevronDown className="mt-5" />
      </div>
    </div>
  )
}
