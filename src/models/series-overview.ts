import { IMDbTVSeriesDetails } from "@/interfaces/imdb-api/imdb-media-details";
import MediaOverview, { MediaType } from "./media-overview";
import IMDBbImage, { PosterSizes } from "@/services/imdb-api/imdb-images";

export default class SeriesOverview extends MediaOverview {
  readonly mediaType = MediaType.Series

  constructor(
    id: number,
    overview: string,
    posterPath: string | null,
    rating: number,
    title: string,

    readonly episodes: number,
    readonly seasons: number,
  ) {
    super(id, overview, posterPath, rating, title)
  }

  static fromIMDbSeriesDetails(series: IMDbTVSeriesDetails) {
    return new SeriesOverview(
      series.id,
      series.overview,
      IMDBbImage.poster(PosterSizes.W185, series.poster_path),
      series.vote_average,
      series.name,
      series.number_of_episodes,
      series.number_of_seasons,
    )
  }
}
