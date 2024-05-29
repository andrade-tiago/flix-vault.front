import { useQuery, useQueryClient } from "react-query";
import getIMDbTVSeriesList, { IMDbTVSeriesListEndpoint } from "@/services/imdb-api/get-imdb-tv-list";
import getIMDbTVSeriesDetails from "@/services/imdb-api/get-imdb-tv-series-details";
import SeriesOverview from "@/models/series-overview";

export default function useSeriesOverviewList(
  listName: IMDbTVSeriesListEndpoint,
  pageNumber: number = 1,
) {
  const queryClient = useQueryClient();

  const queryFn = async () => {
    const imdbSeriesList = await getIMDbTVSeriesList(listName, pageNumber)

    const seriesOverviewList = imdbSeriesList.results.map(
      async series => {
        const imdbSeriesDetails = await queryClient.fetchQuery({
          queryKey: ['imdb', 'series', series.id, 'details'],
          queryFn: () => getIMDbTVSeriesDetails(series.id),
        })

        return SeriesOverview.fromIMDbSeriesDetails(imdbSeriesDetails)
      }
    )

    return Promise.all(seriesOverviewList)
  }

  return useQuery({
    queryKey: ['series', listName, pageNumber],
    queryFn,
  })
}
