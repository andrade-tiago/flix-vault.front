import useMovieImages from "@/hooks/use-movie-images";
import { MovieOverview } from "@/interfaces/media-overview";
import Rating from "./Rating";
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
          src={movieImages.data.backdropImgPath} alt=""
          className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-50"
        />
      )}

      <div className="max-w-xl flex gap-8 flex-col">
        <ul className="flex gap-5 items-baseline">
          <li>{movie.year}</li>
          <li>{movie.runtime} min</li>
          <li><Rating value={movie.rating} /></li>
        </ul>

        <h3 className="text-4xl font-medium">
          {movie.title}
        </h3>

        <p>
          {movie.overview}
        </p>

        <PlayButton mediaType={movie.mediaType} mediaId={movie.id} />
      </div>
    </section>
  ) 
}
