import { IMDbMovieDetails } from "@/interfaces/imdb-api/imdb-media-details";
import IMDBbImageURL, { PosterSizes } from "@/services/imdb-api/imdb-images";

export default class MovieOverview {
  constructor(
    readonly id: number,
    readonly overview: string,
    readonly posterURL: string | null,
    readonly rating: number,
    readonly title: string,
    readonly year: number,
    readonly runtime: number,
  ) {}

  static fromIMDbMovieDetails(movie: IMDbMovieDetails) {
    return new MovieOverview(
      movie.id,
      movie.overview,
      movie.poster_path ? IMDBbImageURL.poster(PosterSizes.W185, movie.poster_path) : null,
      movie.vote_average,
      movie.title,
      new Date(movie.release_date).getFullYear(),
      movie.runtime,
    )
  }
}
