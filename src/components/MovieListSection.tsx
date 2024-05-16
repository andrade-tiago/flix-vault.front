import { Movie } from "../interfaces/movies-api/movie-list"
import Carousel from "./Carousel"
import MovieCard from "./movie/MovieCard"

interface MovieListSectionProps {
  title: string
  movieList: Movie[]
}

export default function MovieListSection(props: MovieListSectionProps) {
  return (
    <section>
      <h3 className="px-3 sm:px-5 md:px-7 xl:px-9 font-medium text-2xl">
        {props.title}
      </h3>

      <Carousel>
        {props.movieList.map((movie) => (
          <MovieCard
            title={movie.title}
            description={movie.overview}
            duration={50}
            imgPath={movie.poster_path}
            rating={movie.vote_average}
            year={new Date(movie.release_date).getFullYear()}
            key={movie.id}
          />
        ))}
      </Carousel>
    </section>
  )
}
