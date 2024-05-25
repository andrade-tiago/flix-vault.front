import IMDbMovieDetails from "../../interfaces/imdb-api/imdb-movie-details";
import MovieOverview from "../../interfaces/movie-overview";

export default function movieOverviewOf(movie: IMDbMovieDetails): MovieOverview {
  return {
    id: movie.id,
    overview: movie.overview,
    posterPath: movie.poster_path,
    rating: movie.vote_average,
    runtime: movie.runtime,
    title: movie.title,
    year: new Date(movie.release_date).getFullYear(),
  }
}
