import { useQuery } from "react-query";
import getIMDbMovieImages from "@/services/imdb-api/get-imdb-movie-images";
import MediaImagesURLs from "@/classes/media-images";

export default function useMediaImages(
  movieId: number,
) {
  const queryFn = async () => {
    const movieImages = await getIMDbMovieImages(movieId)

    return MediaImagesURLs.fromIMDbMediaImages(movieImages)
  }

  return useQuery({
    queryKey: ['movies', movieId, 'images'],
    queryFn,
  })
}
