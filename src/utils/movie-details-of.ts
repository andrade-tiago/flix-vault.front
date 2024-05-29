import { IMDbMovieDetails } from "@/interfaces/imdb-api/imdb-media-details";
import MovieDetails from "@/interfaces/movie-details";

export default function movieDetailsOf(
  movie: IMDbMovieDetails,
): MovieDetails {
  return {
    genres: movie.genres,
    originalLanguage: movie.original_language,
    originalTitle: movie.original_title,
    overview: movie.overview,
    productionCompanies: movie.production_companies,
    rating: movie.vote_average,
    runtime: movie.runtime,
    title: movie.title,
    year: new Date(movie.release_date).getFullYear(),
  }
}
