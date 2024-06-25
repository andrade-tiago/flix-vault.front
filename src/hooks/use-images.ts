import { useQuery, useQueryClient } from "react-query";
import { MediaType } from "@/enums/media-type";
import { LanguageCode } from "iso-639-1";
import IMDBbImageURL, { BackdropSizes, PosterSizes, TitleSizes } from "@/services/imdb-api/imdb-images";
import getIMDbMediaImages from "@/services/imdb-api/get-imdb-media-images";
import IMDbImage from "@/interfaces/imdb-api/imdb-image";

type ImgConfig = {
  mediaType: MediaType
  mediaId: number
  languages: (LanguageCode | null)[]
  allowRandomImgIfNotFound: boolean
}
type backdropImgConfig = ImgConfig & { size: BackdropSizes }
type   posterImgConfig = ImgConfig & { size:   PosterSizes }
type    titleImgConfig = ImgConfig & { size:    TitleSizes }

export function useMediaBackdropImgURL(options: backdropImgConfig) {
  const queryClient = useQueryClient()

  const queryFn = async () => {
    const images = await queryClient.fetchQuery({
      queryKey: ['imdb', options.mediaType, options.mediaId, 'images'],
      queryFn: () => getIMDbMediaImages(options.mediaType, options.mediaId),
    })

    const imgPath = filterImg(
      images.backdrops,
      options.languages,
      options.allowRandomImgIfNotFound
    )?.file_path

    return imgPath ? IMDBbImageURL.backdrop(options.size, imgPath) : null
  }

  return useQuery({
    queryFn,
    queryKey: ['images', 'backdrop', options]
  })
}

export function useMediaPosterImgURL(options: posterImgConfig) {
  const queryClient = useQueryClient()

  const queryFn = async () => {
    const images = await queryClient.fetchQuery({
      queryKey: ['imdb', options.mediaType, options.mediaId, 'images'],
      queryFn: () => getIMDbMediaImages(options.mediaType, options.mediaId),
    })

    const imgPath = filterImg(
      images.posters,
      options.languages,
      options.allowRandomImgIfNotFound
    )?.file_path

    return imgPath ? IMDBbImageURL.poster(options.size, imgPath) : null
  }

  return useQuery({
    queryFn,
    queryKey: ['images', 'poster', options]
  })
}

export function useMediaTitleImgURL(options: titleImgConfig) {
  const queryClient = useQueryClient()

  const queryFn = async () => {
    const images = await queryClient.fetchQuery({
      queryKey: ['imdb', options.mediaType, options.mediaId, 'images'],
      queryFn: () => getIMDbMediaImages(options.mediaType, options.mediaId),
    })

    const imgPath = filterImg(
      images.logos,
      options.languages,
      options.allowRandomImgIfNotFound
    )?.file_path

    return imgPath ? IMDBbImageURL.title(options.size, imgPath) : null
  }

  return useQuery({
    queryFn,
    queryKey: ['images', 'title', options]
  })
}

function filterImg(
  images: IMDbImage[],
  languages: (LanguageCode | null)[],
  allowRandomImgIfNotFound: boolean,
) {
  let filteredImage: IMDbImage | undefined
  for (const lang of languages) {
    filteredImage = images.find(img => img.iso_639_1 === lang)

    if (filteredImage) {
      return filteredImage
    }
  }
  if (allowRandomImgIfNotFound) {
    filteredImage = images[0]
  }
  return filteredImage
}
