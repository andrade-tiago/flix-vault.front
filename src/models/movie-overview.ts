import { IMDbMovieDetails } from "@/interfaces/imdb-api/imdb-media-details";
import MediaOverview, { MediaType } from "./media-overview";
import IMDBbImage, { PosterSizes } from "@/services/imdb-api/imdb-images";

export default class MovieOverview extends MediaOverview {
  readonly mediaType = MediaType.Movie

  constructor(
    id: number,
    overview: string,
    posterURL: string | null,
    rating: number,
    title: string,

    readonly runtime: number,
    readonly year: number,
  ) {
    super(id, overview, posterURL, rating, title)
  }

  static fromIMDbMovieDetails(movie: IMDbMovieDetails) {
    return new MovieOverview(
      movie.id,
      movie.overview,
      IMDBbImage.poster(PosterSizes.W185, movie.poster_path),
      movie.vote_average,
      movie.title,
      movie.runtime,
      new Date(movie.release_date).getFullYear(),
    )
  }
}
