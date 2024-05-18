import MovieOverview from "../interfaces/movie-overview"
import Carousel from "./Carousel"
import MovieCard from "./movie/MovieCard"

interface MovieListSectionProps {
  title: string
  movieList: MovieOverview[]
}

export default function MovieListSection({ title, movieList }: MovieListSectionProps) {
  return (
    <section>
      <h3 className="px-3 sm:px-5 md:px-7 xl:px-9 font-medium text-2xl">
        {title}
      </h3>

      <Carousel>
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Carousel>
    </section>
  )
}
