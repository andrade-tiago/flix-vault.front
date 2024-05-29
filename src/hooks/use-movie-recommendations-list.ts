import { useQuery, useQueryClient } from "react-query";
import getIMDbRecommendationsBasedOnMovie from "@/services/imdb-api/get-imdb-movie-recommendations";
import getIMDbMovieDetails from "@/services/imdb-api/get-imdb-movie-details";
import MovieOverview from "@/models/movie-overview";

export default function useMovieRecommendationsList(
  movieId: number,
  pageNumber: number = 1,
) {
  const queryClient = useQueryClient()

  const queryFn = async () => {
    const imdbMovieList = await getIMDbRecommendationsBasedOnMovie(movieId, pageNumber)

    const movieOverviewList = imdbMovieList.results.map(
      async movie => {
        const imdbMovieDetails = await queryClient.fetchQuery({
          queryKey: ['imdb', 'movie', movie.id, 'details'],
          queryFn: () => getIMDbMovieDetails(movie.id),
        })

        return MovieOverview.fromIMDbMovieDetails(imdbMovieDetails)
      }
    )

    return Promise.all(movieOverviewList)
  }

  return useQuery({
    queryKey: ['movie', movieId, 'recommendations', pageNumber],
    queryFn,
  })
}