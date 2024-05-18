import { IMDbMovieList } from "../interfaces/imdb-api/imdb-movie-list"
import { movieAPI } from "./movie-api"
import IMDbMovieDetails from "../interfaces/imdb-api/imdb-movie-details"
import { IMDbMovieListEndpoint } from "../enums/imdb-movie-list-endpoint"
import MovieOverview from "../interfaces/movie-overview"

export default async function getMovieOverviewList(
  listName: IMDbMovieListEndpoint,
  page = 1
): Promise<MovieOverview[]> {
  const movies = await movieAPI.get<IMDbMovieList>(`movie/${listName}`, {
    params: {
      language: 'pt',
      page: page,
    },
  }).then(json => json.data)

  const getMoviesDetails = movies.results.map(movie => {
    return movieAPI.get<IMDbMovieDetails>(`movie/${movie.id}`, {
      params: {
        language: 'pt',
        append_to_response: 'images',
      },
    })
      .then(json => json.data)
      .then((movie): MovieOverview => {
        return {
          backdropPath: movie.backdrop_path,
          id: movie.id,
          logoPath: movie.images.logos[0]?.file_path || "",
          overview: movie.overview,
          posterPath: movie.poster_path,
          rating: movie.vote_average,
          runtime: movie.runtime,
          title: movie.title,
          year: new Date(movie.release_date).getFullYear(),
        }
      })
  })

  return await Promise.all(getMoviesDetails)
}
