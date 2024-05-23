import { IMDbMovieListEndpoint } from "../enums/imdb-movie-list-endpoint";
import { IMDbMovieList } from "../interfaces/imdb-api/imdb-movie-list";
import { movieAPI } from "./movie-api";

export default async function getIMDbMovieList(listName: IMDbMovieListEndpoint, pageNumber = 1) {
  const movieList = await movieAPI.get<IMDbMovieList>(`movie/${listName}`, {
    params: {
      language: 'pt-BR',
      page: pageNumber,
      region: 'br',
    },
  })

  return movieList.data
}