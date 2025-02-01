export interface IMDbMovie {
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
  original_title: string
  release_date: string
  title: string
  video: boolean
}

export default interface IMDbPaginatedList<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}
