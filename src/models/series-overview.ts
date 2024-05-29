import { IMDbTVSeriesDetails } from "@/interfaces/imdb-api/imdb-media-details";
import MediaOverview, { MediaType } from "./media-overview";
import { imgBaseURL } from "@/services/imdb-api/imdb-api";

export default class SeriesOverview extends MediaOverview {
  readonly mediaType = MediaType.Series

  constructor(
    id: number,
    overview: string,
    posterPath: string,
    rating: number,
    title: string,

    readonly episodes: number,
    readonly seasons: number,
  ) {
    super(id, overview, posterPath, rating, title)
  }

  static fromIMDbSeriesDetails(series: IMDbTVSeriesDetails) {
    let posterPath = series.poster_path
    if (posterPath) {
      posterPath = imgBaseURL + 'w185' + posterPath
    }

    return new SeriesOverview(
      series.id,
      series.overview,
      posterPath,
      series.vote_average,
      series.name,
      series.number_of_episodes,
      series.number_of_seasons,
    )
  }
}
