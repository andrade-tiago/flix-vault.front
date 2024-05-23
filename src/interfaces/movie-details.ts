import IMDbGenre from "./imdb-api/imdb-genre"

export default interface MovieDetails {
  backdropPath: string
  genres: IMDbGenre[]
  originalLanguage: string
  originalTitle: string
  overview: string
  posterPath: string
  productionCompanies: {
    id: number
    name: string
  }[]
  rating: number
  runtime: number
  title: string
  year: number
}
