import IMDbMovieImages from "@/interfaces/imdb-api/imdb-movie-images";
import { movieAPI } from "./imdb-api";

export default async function getIMDbMovieImages(
  movieId: number,
) {
  const getIMDbMovieImagesResponse = await movieAPI.get<IMDbMovieImages>(`movie/${movieId}/images`)

  return getIMDbMovieImagesResponse.data
}
