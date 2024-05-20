import IMDbMovieDetails from "../interfaces/imdb-api/imdb-movie-details";
import { movieAPI } from "./movie-api";

export default async function getIMDbMovieDetails(id: number) {
  const json = await movieAPI.get<IMDbMovieDetails>(`movie/${id}`, {
    params: {
      language: 'pt',
      append_to_response: 'images',
    },
  })

  return json.data
}
