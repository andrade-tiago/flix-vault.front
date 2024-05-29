import IMDbPaginatedList, { IMDbMovie } from "../../interfaces/imdb-api/imdb-paginated-list";
import { movieAPI } from "./imdb-api";

export default async function getIMDbRecommendationsBasedOnMovie(
  movieId: number,
  pageNumber: number = 1,
) {
  const getIMDbMovieListResponse = await movieAPI.get<IMDbPaginatedList<IMDbMovie>>(
    `movie/${movieId}/recommendations`, {
      params: {
        language: 'pt-BR',
        page: pageNumber,
      },
    }
  )

  return getIMDbMovieListResponse.data
}
