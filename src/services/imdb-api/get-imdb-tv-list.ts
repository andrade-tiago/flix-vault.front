import IMDbPaginatedList, { IMDbTVSeries } from "../../interfaces/imdb-api/imdb-paginated-list";
import { movieAPI } from "./imdb-api";

export enum IMDbTVSeriesListEndpoint {
  AiringToday = 'airing_today',
  OnTheAir = 'on_the_air',
  Popular = 'popular',
  TopRated = 'top_rated',
}

export default async function getIMDbTVSeriesList(
  listName: IMDbTVSeriesListEndpoint,
  pageNumber: number = 1,
) {
  const getTVListResponse = await movieAPI.get<IMDbPaginatedList<IMDbTVSeries>>(
    `tv/${listName}`, {
      params: {
        language: 'pt-BR',
        page: pageNumber,
      },
    }
  )

  return getTVListResponse.data
}
