import IMDbGenre from "./imdb-api/imdb-genre"

export default interface MovieDetails {
  genres: IMDbGenre[]
  originalLanguage: string
  originalTitle: string
  overview: string
  productionCompanies: {
    id: number
    name: string
  }[]
  rating: number
  runtime: number
  title: string
  year: number
}
