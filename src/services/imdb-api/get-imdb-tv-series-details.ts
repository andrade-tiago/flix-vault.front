import { IMDbTVSeriesDetails } from "@/interfaces/imdb-api/imdb-media-details";
import { movieAPI } from "./imdb-api";

export default async function getIMDbTVSeriesDetails(
  tvSeriesId: number,
) {
  const getTVSeriesDetailsResponse = await movieAPI.get<IMDbTVSeriesDetails>(`tv/${tvSeriesId}`, {
    params: {
      language: 'pt-BR',
    },
  })

  return getTVSeriesDetailsResponse.data
}
