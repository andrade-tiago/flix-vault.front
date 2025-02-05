import MovieOverview from "@/classes/movie-overview";
import MovieCardLoading from "@/components/Loading/MovieCardLoading";
import MovieCard from "@/components/MovieCard";
import Carousel from "@/components/Carousel";

type MovieCarouselProps = {
  movieList?: MovieOverview[]
}

export default function MovieCarousel({ movieList }: MovieCarouselProps) {
  return (
    <Carousel>
      {movieList && (movieList.length > 0) ? (
        movieList.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))
      ) : (
        Array.from({ length: 10 }).map((_, i) => (
          <MovieCardLoading key={i} />
        ))
      )}
    </Carousel>
  )
}
