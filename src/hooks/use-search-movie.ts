import MovieOverview from "@/classes/movie-overview";
import PaginatedList from "@/classes/paginated-list";
import getIMDbMovieDetails from "@/services/imdb-api/get-imdb-movie-details";
import searchIMDbMovie, { searchIMDbMovieConfig } from "@/services/imdb-api/search-imdb-movie";
import { useQuery, useQueryClient } from "react-query";

const useSearchMovie = (config: searchIMDbMovieConfig) => {
  const queryClient = useQueryClient()

  const queryFn = async () => {
    const imdbMovies = await queryClient.fetchQuery({
      queryFn: () => searchIMDbMovie(config),
      queryKey: ['imdb', 'search', 'movies', config.query, config.pageNumber],
    })

    const moviesOverviews = imdbMovies.results.map(async movie => {
      const movieDetails = await queryClient.fetchQuery({
        queryKey: ['imdb', 'movies', movie.id, 'details'],
        queryFn: () => getIMDbMovieDetails(movie.id),
      })

      return MovieOverview.fromIMDbMovieDetails(movieDetails)
    })

    return new PaginatedList(
      await Promise.all(moviesOverviews),
      imdbMovies.page,
      imdbMovies.total_pages,
      imdbMovies.total_results,
    )
  }

  const query = useQuery({
    queryFn,
    queryKey: ['search', 'movies', config.query, config.pageNumber],
  })

  return {
    results: query.data,
    isLoading: query.isLoading,
    error: query.error,
  }
}

export default useSearchMovie
