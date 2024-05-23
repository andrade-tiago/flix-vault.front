import MovieDetails from "../interfaces/movie-details";
import getIMDbMovieDetails from "./get-imdb-movie-details";

export default async function getMovieDetails(id: number): Promise<MovieDetails> {
  const movie = await getIMDbMovieDetails(id)

  return {
    backdropPath: movie.backdrop_path,
    genres: movie.genres,
    originalLanguage: movie.original_language,
    originalTitle: movie.original_title,
    overview: movie.overview,
    posterPath: movie.poster_path,
    productionCompanies: movie.production_companies.map(
      company => ({
        id: company.id,
        name: company.name
      }
    )),
    rating: movie.vote_average,
    runtime: movie.runtime,
    title: movie.title,
    year: new Date(movie.release_date).getFullYear(),
  }
}
