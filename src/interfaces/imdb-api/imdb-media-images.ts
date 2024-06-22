import IMDbImage from "./imdb-image"

export default interface IMDbMediaImages {
  id?: number
  backdrops: IMDbImage[]
  logos: IMDbImage[]
  posters: IMDbImage[]
}
