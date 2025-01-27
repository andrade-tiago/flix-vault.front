import IMDbMediaImages from "@/interfaces/imdb-api/imdb-media-images";
import { movieAPI } from "./imdb-api";

export default async function getIMDbMovieImages(
  movieId: number,
) {
  const getIMDbMediaImagesResponse =
    await movieAPI.get<IMDbMediaImages>(`movie/${movieId}/images`)

  return getIMDbMediaImagesResponse.data
}
