import { IMDbMovieDetails } from "@/interfaces/imdb-api/imdb-media-details";
import MediaOverview, { MediaType } from "./media-overview";
import { imgBaseURL } from "@/services/imdb-api/imdb-api";

export default class MovieOverview extends MediaOverview {
  readonly mediaType = MediaType.Movie

  constructor(
    id: number,
    overview: string,
    posterPath: string,
    rating: number,
    title: string,

    readonly runtime: number,
    readonly year: number,
  ) {
    super(id, overview, posterPath, rating, title)
  }

  static fromIMDbMovieDetails(movie: IMDbMovieDetails) {
    let posterPath = movie.poster_path
    if (posterPath) {
      posterPath = imgBaseURL + 'w185' + posterPath
    }

    return new MovieOverview(
      movie.id,
      movie.overview,
      posterPath,
      movie.vote_average,
      movie.title,
      movie.runtime,
      new Date(movie.release_date).getFullYear(),
    )
  }
}
