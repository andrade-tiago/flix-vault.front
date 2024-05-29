import IMDbPaginatedList, { IMDbMovie } from "../../interfaces/imdb-api/imdb-paginated-list";
import { movieAPI } from "./imdb-api";

export enum IMDbMovieListEndpoint {
  InTheaters = 'now_playing',
  Popular = 'popular',
  TopRated = 'top_rated',
  UpComing = 'upcoming',
}

export default async function getIMDbMovieList(
  listName: IMDbMovieListEndpoint,
  pageNumber: number = 1,
) {
  const getMovieListResponse = await movieAPI.get<IMDbPaginatedList<IMDbMovie>>(
    `movie/${listName}`, {
      params: {
        language: 'pt-BR',
        page: pageNumber,
        region: 'BR',
      },
    }
  )

  return getMovieListResponse.data
}
