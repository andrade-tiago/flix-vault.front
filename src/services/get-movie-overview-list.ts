import { IMDbMovieListEndpoint } from "../enums/imdb-movie-list-endpoint"
import MovieOverview from "../interfaces/movie-overview"
import getIMDbMovieDetails from "./get-imdb-movie-details"
import getIMDbMovieList from "./get-imdb-movie-list"

export default async function getMovieOverviewList(
  listName: IMDbMovieListEndpoint,
  pageNumber = 1
): Promise<MovieOverview[]> {
  const movies = await getIMDbMovieList(listName, pageNumber)

  const movieList = movies.results.map(async movie => {
    const details = await getIMDbMovieDetails(movie.id)

    return {
      backdropPath: details.backdrop_path,
      id: details.id,
      logoPath: details.images.logos[0]?.file_path || "",
      overview: details.overview,
      posterPath: details.poster_path,
      rating: details.vote_average,
      runtime: details.runtime,
      title: details.title,
      year: new Date(details.release_date).getFullYear(),
    }
  })

  return Promise.all(movieList)
}
