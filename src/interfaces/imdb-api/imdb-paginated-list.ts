interface IMDbMedia {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface IMDbMovie extends IMDbMedia {
  original_title: string
  release_date: string
  title: string
  video: boolean
}

export interface IMDbTVSeries extends IMDbMedia {
  first_air_date: string
  name: string
  origin_country: string[]
  original_name: string
}

export default interface IMDbPaginatedList<T extends IMDbMedia> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}
