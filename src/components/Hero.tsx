import { ChevronDown } from "lucide-react"
import MovieData from "./movie/MovieData"
import PlayButton from "./movie/PlayButton"
import MovieOverview from "../interfaces/movie-overview"
import useMovieImages from "../hooks/use-movie-images"

interface HeroProps {
  movie: MovieOverview
}

export default function Hero({ movie }: HeroProps) {
  const movieImages = useMovieImages(movie.id)

  return (
    <div className="relative pt-40 pb-20 bg-gradient-to-t from-gray-950 px-4">
      {movieImages.data?.backdropImgPath && (
        <img
          src={movieImages.data.backdropImgPath} alt=""
          className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-50"
        />
      )}

      <div className="max-w-2xl mx-auto flex items-center gap-5 flex-col">
        <h3 className="font-medium text-5xl text-center">
          {movieImages.data?.titleImgPath ? (
            <img
              src={movieImages.data.titleImgPath}
              alt={movie.title}
              title={movie.title}
              className="max-w-full"
            />
          ): movie.title}
        </h3>

        <MovieData
          runtime={movie.runtime}
          year={movie.year}
          rating={movie.rating}
        />

        <h4 className="font-medium uppercase tracking-widest text-sm -mb-4">
          Sinopse
        </h4>
        <p className="text-center text-gray-300">
          {movie.overview}
        </p>

        <PlayButton movieId={movie.id} className="shadow-amber-500" />

        <ChevronDown className="mt-5" />
      </div>
    </div>
  )
}
