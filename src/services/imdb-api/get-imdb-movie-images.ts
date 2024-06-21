import IMDbMediaImages from "@/interfaces/imdb-api/imdb-movie-images";
import { movieAPI } from "./imdb-api";

export default async function getIMDbMovieImages(
  movieId: number,
) {
  const getIMDbMovieImagesResponse = await movieAPI.get<IMDbMediaImages>(`movie/${movieId}/images`)

  return getIMDbMovieImagesResponse.data
}