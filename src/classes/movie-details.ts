import IMDbGenre from "@/interfaces/imdb-api/imdb-genre";
import { IMDbMovieDetails } from "@/interfaces/imdb-api/imdb-media-details";

export default class MovieDetails {
  constructor(
    readonly genres: IMDbGenre[],
    readonly originalLanguage: string,
    readonly originalTitle: string,
    readonly overview: string,
    readonly productionCompanies: string[],
    readonly rating: number,
    readonly title: string,
    readonly runtime: number,
    readonly year: number,
  ) {}

  static fromIMDbMovieDetails(movie: IMDbMovieDetails) {
    return new MovieDetails(
      movie.genres,
      movie.original_language,
      movie.original_title,
      movie.overview,
      movie.production_companies.map(comp => comp.name),
      movie.vote_average,
      movie.title,
      movie.runtime,
      new Date(movie.release_date).getFullYear(),
    )
  }
}
