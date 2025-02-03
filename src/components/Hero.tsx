import PlayButton from "./PlayButton"
import Rating from "./Rating"
import MovieOverview from "@/classes/movie-overview"
import { MovieData } from "./MovieData"
import { useMediaBackdropImgURL, useMediaTitleImgURL } from "@/hooks/use-images"
import { BackdropSizes, TitleSizes } from "@/services/imdb-api/imdb-images"
import { LuChevronDown } from "react-icons/lu"

interface HeroProps {
  movie: MovieOverview
}

export default function Hero({ movie }: HeroProps) {
  const { data: movieBackdropImgURL } = useMediaBackdropImgURL({
    movieId: movie.id,
    languages: [null],
    size: BackdropSizes.Original,
    allowRandomImgIfNotFound: false,
  })
  const { data: movieTitleImgURL} = useMediaTitleImgURL({
    movieId: movie.id,
    languages: ['pt', 'en'],
    size: TitleSizes.W500,
    allowRandomImgIfNotFound: true,
  })

  return (
    <div className="relative pt-40 pb-20 bg-gradient-to-t from-gray-950 px-4">
      {movieBackdropImgURL && (
        <img
          src={movieBackdropImgURL} alt=""
          className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-20"
        />
      )}

      <div className="max-w-2xl mx-auto flex items-center gap-5 flex-col">
        <h3 className="font-medium text-5xl text-center">
          {movieTitleImgURL ? (
            <img
              src={movieTitleImgURL}
              alt={movie.title}
              title={movie.title}
              className="max-w-full"
            />
          ) : movie.title}
        </h3>

        <MovieData.Root>
          <MovieData.Item>{movie.year}</MovieData.Item>
          <MovieData.Item>{movie.runtime} min</MovieData.Item>
          <MovieData.Item><Rating value={movie.rating} /></MovieData.Item>
        </MovieData.Root>

        <h4 className="font-medium uppercase tracking-widest text-sm -mb-4">
          Sinopse
        </h4>
        <p className="text-center text-gray-300">
          {movie.overview}
        </p>

        <PlayButton movieId={movie.id} className="shadow-amber-500" />

        <LuChevronDown className="mt-5" />
      </div>
    </div>
  )
}
