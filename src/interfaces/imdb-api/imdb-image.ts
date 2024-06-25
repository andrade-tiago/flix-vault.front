import { LanguageCode } from "iso-639-1"

export default interface IMDbImage {
  aspect_ratio: number
  height: number
  iso_639_1: LanguageCode
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}
