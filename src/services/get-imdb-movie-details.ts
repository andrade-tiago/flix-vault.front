import IMDbMovieDetails from "../interfaces/imdb-api/imdb-movie-details";
import { movieAPI } from "./movie-api";

export default function getIMDbMovieDetails(id: number) {
  return movieAPI.get<IMDbMovieDetails>(`movie/${id}`, {
    params: {
      language: 'pt',
      append_to_response: 'images',
    },
  })
}
