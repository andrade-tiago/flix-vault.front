import { ChevronDown } from "lucide-react"
import MovieData from "./movie/MovieData"
import PlayButton from "./movie/PlayButton"
import { imgBaseURL } from "../services/movie-api"
import MovieOverview from "../interfaces/movie-overview"

interface HeroProps {
  movie: MovieOverview
}

export default function Hero({ movie }: HeroProps) {
  const backdropImgURL = imgBaseURL + 'original' + movie.backdropPath
  const titleImgURL = imgBaseURL + 'w780' + movie.logoPath

  return (
    <div className="relative pt-40 pb-20 bg-gradient-to-t from-gray-950 px-4">
      {/* background-image */} <img
        src={backdropImgURL} alt="Banner"
        className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-50"
      />

      <div className="max-w-2xl mx-auto flex items-center gap-5 flex-col">
        <h3 className="font-medium text-5xl text-center">
          <img src={titleImgURL} alt={movie.title} className="max-w-full" />
        </h3>

        <MovieData
          duration={movie.runtime}
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
