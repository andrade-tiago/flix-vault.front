import IMDbMediaImages from "@/interfaces/imdb-api/imdb-media-images";
import IMDBbImage, {
  BackdropSizes,
  PosterSizes,
  TitleSizes,
} from "@/services/imdb-api/imdb-images";

export default class MediaImagesURLs {
  private constructor(
    readonly backdrop: string | null,
    readonly poster: string | null,
    readonly title: string | null,
  ) {}

  static fromIMDbMediaImages(images: IMDbMediaImages) {
    const titleImgPath: string | null | undefined =
      images.logos.find(logo => logo.iso_639_1 === 'pt-BR')?.file_path

    const backdropImgPath: string | null | undefined =
      images.backdrops.find(backdrop => backdrop.iso_639_1 === null)?.file_path

    const posterImgPath: string | null | undefined =
      images.posters.find(poster => poster.iso_639_1 === 'pt-BR')?.file_path
      || images.posters.find(poster => poster.iso_639_1 === 'en')?.file_path
      || images.posters[0].file_path

    return new MediaImagesURLs(
      IMDBbImage.backdrop(BackdropSizes.Original, backdropImgPath),
      IMDBbImage.poster(PosterSizes.W342, posterImgPath),
      IMDBbImage.title(TitleSizes.W500, titleImgPath),
    )
  }
}
