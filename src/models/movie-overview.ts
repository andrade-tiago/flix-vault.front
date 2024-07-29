import { IMDbMovieDetails } from "@/interfaces/imdb-api/imdb-media-details";
import MediaOverview from "./media-overview";
import IMDBbImageURL, { PosterSizes } from "@/services/imdb-api/imdb-images";
import { MediaType } from "@/enums/media-type";

export default class MovieOverview extends MediaOverview {
  readonly mediaType = MediaType.Movie

  constructor(
    id: number,
    overview: string,
    posterURL: string | null,
    rating: number,
    title: string,
    year: number,

    readonly runtime: number,
  ) {
    super(id, overview, posterURL, rating, title, year)
  }

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
