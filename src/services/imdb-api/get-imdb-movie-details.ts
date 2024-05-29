import { IMDbMovieDetails } from "../../interfaces/imdb-api/imdb-media-details";
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
