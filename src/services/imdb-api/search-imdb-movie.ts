import IMDbPaginatedList, { IMDbMovie } from "@/interfaces/imdb-api/imdb-paginated-list"
import { movieAPI } from "./imdb-api"

export type searchIMDbMovieConfig = {
  query: string
  pageNumber: number
}

const searchIMDbMovie = async ({query, pageNumber}: searchIMDbMovieConfig) => {
  const response = await movieAPI.get<IMDbPaginatedList<IMDbMovie>>('search/movie', {
    params: {
      query,
      page: pageNumber,
      language: 'pt-BR',
      include_adult: true,
    },
  })

  return response.data
}

export default searchIMDbMovie
