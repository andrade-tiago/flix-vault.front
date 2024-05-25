import useMovieImages from "../../hooks/use-movie-images";
import MovieOverview from "../../interfaces/movie-overview";
import MovieData from "./MovieData";
import PlayButton from "./PlayButton";

interface FeaturedMovieProps {
  movie: MovieOverview
}

export default function FeaturedMovie({ movie }: FeaturedMovieProps) {
  const movieImages = useMovieImages(movie.id)

  return (
    <section className="relative py-20 flex px-5 sm:px-10 md:px-20 lg:px-28 bg-gradient-to-r from-gray-950 to-gray-950/40">
      {movieImages.data?.backdropImgPath && (
        <img
          src={movieImages.data.backdropImgPath} alt="Banner"
          className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-50"
        />
      )}

      <div className="max-w-xl flex gap-8 flex-col">
        <MovieData
          runtime={movie.runtime}
          rating={movie.rating}
          year={movie.year}
        />

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
