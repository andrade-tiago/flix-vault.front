import { useQuery, useQueryClient } from "react-query";
import getIMDbMovieDetails from "@/services/imdb-api/get-imdb-movie-details";
import MovieDetails from "@/models/movie-details";

export default function useMovieDetails(
  movieId: number,
) {
  const queryClient = useQueryClient()

  const queryFn = async () => {
    const imdbMovieDetails = await queryClient.fetchQuery({
      queryKey: ['imdb', 'movie', movieId, 'details'],
      queryFn: () => getIMDbMovieDetails(movieId),
    })

    return MovieDetails.fromIMDbMovieDetails(imdbMovieDetails)
  }

  return useQuery({
    queryKey: ['movie', 'details', movieId],
    queryFn,
  })
}
