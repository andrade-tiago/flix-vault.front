import IMDbPaginatedList, { IMDbTVSeries } from "@/interfaces/imdb-api/imdb-paginated-list";
import { movieAPI } from "./imdb-api";

export default async function getIMDbRecommendationsBasedOnSeries(
  seriesId: number,
  pageNumber: number = 1,
) {
  const getIMDbSeriesListResponse = await movieAPI.get<IMDbPaginatedList<IMDbTVSeries>>(
    `tv/${seriesId}/recommendations`, {
      params: {
        language: 'pt-BR',
        page: pageNumber,
      },
    }
  )

  return getIMDbSeriesListResponse.data
}
