import IMDbMediaImages from "@/interfaces/imdb-api/imdb-media-images";
import IMDBbImageURL, {
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
    const titleImgPath: string | null =
      images.logos.find(logo => logo.iso_639_1 === 'pt')?.file_path
      || images.logos.find(logo => logo.iso_639_1 === 'en')?.file_path
      || null

    const backdropImgPath: string | null =
      images.backdrops.find(backdrop => backdrop.iso_639_1 === null)?.file_path
      || null

    const posterImgPath: string | null =
      images.posters.find(poster => poster.iso_639_1 === 'pt')?.file_path
      || images.posters.find(poster => poster.iso_639_1 === 'en')?.file_path
      || images.posters[0].file_path
      || null

    return new MediaImagesURLs(
      backdropImgPath ? IMDBbImageURL.backdrop(BackdropSizes.Original, backdropImgPath) : null,
      posterImgPath ? IMDBbImageURL.poster(PosterSizes.W342, posterImgPath) : null,
      titleImgPath ? IMDBbImageURL.title(TitleSizes.W500, titleImgPath) : null,
    )
  }
}
