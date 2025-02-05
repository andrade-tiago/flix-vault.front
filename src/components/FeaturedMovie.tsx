import PlayButton from "./PlayButton";
import MovieOverview from "@/classes/movie-overview";
import { useMediaBackdropImgURL } from "@/hooks/use-images";
import { BackdropSizes } from "@/services/imdb-api/imdb-images";
import MovieData from "./MovieData";

interface FeaturedMovieProps {
  movie: MovieOverview
}

export default function FeaturedMovie({ movie }: FeaturedMovieProps) {
  const { data: movieBackdropImgURL } = useMediaBackdropImgURL({
    movieId: movie.id,
    languages: [null],
    size: BackdropSizes.Original,
    allowRandomImgIfNotFound: false,
  })

  return (
    <section
      className="relative py-20 flex px-5 sm:px-10
      md:px-20 lg:px-28 bg-gradient-to-r from-gray-950
      to-gray-950/40 items-center min-h-[500px]"
    >
      {movieBackdropImgURL && (
        <img
          src={movieBackdropImgURL} alt=""
          className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-50"
        />
      )}

      <div className="max-w-xl flex gap-8 flex-col">
        <MovieData movie={movie} />

        <h3 className="text-4xl font-medium">
          {movie.title}
        </h3>

        <p>
          {movie.overview}
        </p>

        <PlayButton movieId={movie.id} />
      </div>
    </section>
  ) 
}
