import IMDbGenre from "./imdb-genre"

interface IMDbCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

interface IMDbCountry {
  iso_3166_1: string
  name: string
}

interface IMDbLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

interface IMDbTVSeriesEpisode {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
}

interface IMDbTVSeriesSeason {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}

interface IMDbMediaDetails {
  adult: boolean
  backdrop_path: string
  genres: IMDbGenre[]
  homepage: string
  id: number
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: IMDbCompany[]
  production_countries: IMDbCountry[]
  spoken_languages: IMDbLanguage[]
  status: string
  tagline: string
  vote_average: number
  vote_count: number
}

export interface IMDbMovieDetails extends IMDbMediaDetails {
  belongs_to_collection: string
  budget: number
  imdb_id: string
  original_title: string
  release_date: string
  revenue: number
  runtime: number
  title: string
  video: boolean
}

export interface IMDbTVSeriesDetails extends IMDbMediaDetails {
  created_by: {
    id: number
    credit_id: number
    name: string
    original_name: string
    gender: 1 | 2
    profile_path: string
  }
  episode_run_time: number[]
  first_air_date: string
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: IMDbTVSeriesEpisode
  name: string
  next_episode_to_air: string
  networks: IMDbCompany[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_name: string
  seasons: IMDbTVSeriesSeason[]
  type: string
}
