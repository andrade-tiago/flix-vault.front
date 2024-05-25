import IMDbMovieDetails from "../../interfaces/imdb-api/imdb-movie-details";
import MovieOverview from "../../interfaces/movie-overview";
import { imgBaseURL } from "../imdb-api/imdb-api";

export default function movieOverviewOf(movie: IMDbMovieDetails): MovieOverview {
  let posterPath = movie.poster_path
  if (posterPath) {
    posterPath = imgBaseURL + 'w185' + posterPath
  }

  return {
    id: movie.id,
    overview: movie.overview,
    posterPath: posterPath,
    rating: movie.vote_average,
    runtime: movie.runtime,
    title: movie.title,
    year: new Date(movie.release_date).getFullYear(),
  }
}
