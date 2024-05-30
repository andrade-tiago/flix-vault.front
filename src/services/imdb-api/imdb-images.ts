const imgBaseURL = 'https://image.tmdb.org/t/p/'

export enum PosterSizes {
  Original = "original",
  W92 = "w92",
  W154 = "w154",
  W185 = "w185",
  W342 = "w342",
  W500 = "w500",
  W780 = "w780",
}

export enum BackdropSizes {
  Original = "original",
  W300 = "w300",
  W780 = "w780",
  W1280 = "w1280",
}

export enum TitleSizes {
  Original = "original",
  W45 = "w45",
  W92 = "w92",
  W154 = "w154",
  W185 = "w185",
  W300 = "w300",
  W500 = "w500",
}

export default class IMDBbImage {
  static title(size: TitleSizes, path: string | null | undefined) {
    return path ? (imgBaseURL + size + path) : null
  }
  static poster(size: PosterSizes, path: string | null | undefined) {
    return path ? (imgBaseURL + size + path) : null
  }
  static backdrop(size: BackdropSizes, path: string | null | undefined) {
    return path ? (imgBaseURL + size + path) : null
  }
}
