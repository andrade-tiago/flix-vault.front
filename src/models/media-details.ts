import IMDbGenre from "@/interfaces/imdb-api/imdb-genre";

export default abstract class MediaDetails {
  constructor(
    readonly genres: IMDbGenre[],
    readonly originalLanguage: string,
    readonly originalTitle: string,
    readonly overview: string,
    readonly productionCompanies: string[],
    readonly rating: number,
    readonly title: string,
  ) {}
}
