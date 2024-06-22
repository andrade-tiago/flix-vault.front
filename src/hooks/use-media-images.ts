import { useQuery } from "react-query";
import getIMDbMediaImages from "@/services/imdb-api/get-imdb-media-images";
import MediaImagesURLs from "@/models/media-images";
import { MediaType } from "@/enums/media-type";

export default function useMediaImages(
  mediaType: MediaType,
  mediaId: number,
) {
  const queryFn = async () => {
    const movieImages = await getIMDbMediaImages(mediaType, mediaId)

    return MediaImagesURLs.fromIMDbMediaImages(movieImages)
  }

  return useQuery({
    queryKey: [mediaType, mediaId, 'images'],
    queryFn,
  })
}
