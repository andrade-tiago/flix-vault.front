import IMDbMovieDetails from "../../interfaces/imdb-api/imdb-movie-details";
import { movieAPI } from "./imdb-api";

export default async function getIMDbMovieDetails(
  movieId: number,
) {
  const getMovieDetailsResponse = await movieAPI.get<IMDbMovieDetails>(`movie/${movieId}`, {
    params: {
      language: 'pt-BR',
    },
  })

  return getMovieDetailsResponse.data
}
