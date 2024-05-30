import { useQuery } from "react-query";
import getIMDbMovieImages from "@/services/imdb-api/get-imdb-movie-images";
import MediaImagesURLs from "@/models/media-images";

export default function useMovieImages(
  movieId: number,
) {
  const queryFn = async () => {
    const movieImages = await getIMDbMovieImages(movieId)

    return MediaImagesURLs.fromIMDbMediaImages(movieImages)
  }

  return useQuery({
    queryKey: ['movie', movieId, 'images'],
    queryFn,
  })
}
