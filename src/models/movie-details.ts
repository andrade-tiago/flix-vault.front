import IMDbGenre from "@/interfaces/imdb-api/imdb-genre";
import MediaDetails from "./media-details";
import { IMDbMovieDetails } from "@/interfaces/imdb-api/imdb-media-details";

export default class MovieDetails extends MediaDetails {
  constructor(
    genres: IMDbGenre[],
    originalLanguage: string,
    originalTitle: string,
    overview: string,
    productionCompanies: string[],
    rating: number,
    title: string,

    readonly runtime: number,
    readonly year: number,
  ) {
    super(genres, originalLanguage, originalTitle, overview, productionCompanies, rating, title)
  }

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
