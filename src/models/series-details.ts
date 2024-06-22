import IMDbGenre from "@/interfaces/imdb-api/imdb-genre";
import MediaDetails from "./media-details";
import { IMDbTVSeriesDetails } from "@/interfaces/imdb-api/imdb-media-details";

export default class SeriesDetails extends MediaDetails {
  constructor(
    genres: IMDbGenre[],
    originalLanguage: string,
    originalTitle: string,
    overview: string,
    productionCompanies: string[],
    rating: number,
    title: string,
  ) {
    super(genres, originalLanguage, originalTitle, overview, productionCompanies, rating, title)
  }

  static fromIMDbTVSeriesDetails(series: IMDbTVSeriesDetails) {
    return new SeriesDetails(
      series.genres,
      series.original_language,
      series.original_name,
      series.overview,
      series.production_companies.map(comp => comp.name),
      series.vote_average,
      series.name,
    )
  }
}