import IMDbMovieDetails from "../../interfaces/imdb-api/imdb-movie-details";
import MovieDetails from "../../interfaces/movie-details";

export default function movieDetailsOf(movie: IMDbMovieDetails): MovieDetails {
  return {
    backdropPath: movie.backdrop_path,
    genres: movie.genres,
    originalLanguage: movie.original_language,
    originalTitle: movie.original_title,
    overview: movie.overview,
    posterPath: movie.poster_path,
    productionCompanies: movie.production_companies,
    rating: movie.vote_average,
    runtime: movie.runtime,
    title: movie.title,
    year: new Date(movie.release_date).getFullYear(),
  }
}
