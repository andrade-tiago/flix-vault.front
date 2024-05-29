import { IMDbTVSeriesDetails } from "../interfaces/imdb-api/imdb-media-details";
import { MediaType, SeriesOverview } from "../interfaces/media-overview";
import { imgBaseURL } from "../services/imdb-api/imdb-api";

export default async function seriesOverviewOf(series: IMDbTVSeriesDetails): Promise<SeriesOverview> {
  let posterPath = series.poster_path
  if (posterPath) {
    posterPath = imgBaseURL + 'w185' + posterPath
  }

  return {
    mediaType: MediaType.Series,

    episodes: series.number_of_episodes,
    id: series.id,
    overview: series.overview,
    posterPath: posterPath,
    rating: series.vote_average,
    seasons: series.number_of_seasons,
    title: series.name,
  }
}
