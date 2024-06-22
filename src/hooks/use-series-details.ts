import { useQuery, useQueryClient } from "react-query";
import getIMDbTVSeriesDetails from "@/services/imdb-api/get-imdb-tv-series-details";
import SeriesDetails from "@/models/series-details";

export default function useSeriesDetails(
  seriesId: number,
) {
  const queryClient = useQueryClient()

  const queryFn = async () => {
    const imdbSeriesDetails = await queryClient.fetchQuery({
      queryKey: ['imdb', 'series', seriesId, 'details'],
      queryFn: () => getIMDbTVSeriesDetails(seriesId),
    })

    return SeriesDetails.fromIMDbTVSeriesDetails(imdbSeriesDetails)
  }

  return useQuery({
    queryKey: ['series', 'details', seriesId],
    queryFn,
  })
}
