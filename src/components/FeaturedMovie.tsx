import useMediaImages from "@/hooks/use-media-images";
import Rating from "./Rating";
import PlayButton from "./PlayButton";
import MovieOverview from "@/models/movie-overview";
import { MediaData } from "./MediaData";

interface FeaturedMovieProps {
  movie: MovieOverview
}

export default function FeaturedMovie({ movie }: FeaturedMovieProps) {
  const { data: movieImages } = useMediaImages(movie.mediaType, movie.id)

  return (
    <section
      className="relative py-20 flex px-5 sm:px-10
      md:px-20 lg:px-28 bg-gradient-to-r from-gray-950
      to-gray-950/40 items-center min-h-[500px]"
    >
      {movieImages?.backdrop && (
        <img
          src={movieImages.backdrop} alt=""
          className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-50"
        />
      )}

      <div className="max-w-xl flex gap-8 flex-col">
        <MediaData.Root>
          <MediaData.Item>{movie.year}</MediaData.Item>
          <MediaData.Item>{movie.runtime} min</MediaData.Item>
          <MediaData.Item><Rating value={movie.rating} /></MediaData.Item>
        </MediaData.Root>

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
