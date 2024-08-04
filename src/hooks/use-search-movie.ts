import MovieOverview from "@/models/movie-overview";
import getIMDbMovieDetails from "@/services/imdb-api/get-imdb-movie-details";
import searchIMDbMovie, { searchIMDbMovieConfig } from "@/services/imdb-api/search-imdb-movie";
import { useQuery, useQueryClient } from "react-query";

const useSearchMovie = (config: searchIMDbMovieConfig) => {
  const queryClient = useQueryClient()

  const queryFn = async () => {
    const imdbMovies = await queryClient.fetchQuery({
      queryFn: () => searchIMDbMovie(config),
      queryKey: ['imdb', 'search', 'movie', config.query, config.pageNumber],
    })

    const moviesOverviews = imdbMovies.results.map(async movie => {
      const movieDetails = await queryClient.fetchQuery({
        queryKey: ['imdb', 'movie', movie.id, 'details'],
        queryFn: () => getIMDbMovieDetails(movie.id),
      })

      return MovieOverview.fromIMDbMovieDetails(movieDetails)
    })

    return Promise.all(moviesOverviews)
  }

  return useQuery({
    queryFn,
    queryKey: ['search', 'movie', config.query, config.pageNumber],
  })
}

export default useSearchMovie
