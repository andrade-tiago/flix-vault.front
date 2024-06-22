import IMDbMediaImages from "@/interfaces/imdb-api/imdb-media-images";
import { movieAPI } from "./imdb-api";
import { MediaType } from "@/enums/media-type";

export default async function getIMDbMediaImages(
  mediaType: MediaType,
  mediaId: number,
) {
  const endpoint = getEndpoint(mediaType)

  const getIMDbMediaImagesResponse =
    await movieAPI.get<IMDbMediaImages>(`${endpoint}/${mediaId}/images`)

  return getIMDbMediaImagesResponse.data
}

const getEndpoint = (mediaType: MediaType) => {
  let endpoint = ""

  switch (mediaType) {
    case MediaType.Movie: endpoint = 'movie'; break;
    case MediaType.Series: endpoint = 'tv'; break;
  }
  return endpoint
}
