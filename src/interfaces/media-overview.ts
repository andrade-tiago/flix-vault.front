interface MediaOverview {
  id: number
  overview: string
  posterPath: string
  rating: number
  title: string
}

export enum MediaType {
  Movie = 'movie',
  Series = 'series',
}

export interface MovieOverview extends MediaOverview {
  runtime: number
  year: number
  mediaType: MediaType.Movie
}

export interface SeriesOverview extends MediaOverview {
  seasons: number
  episodes: number
  mediaType: MediaType.Series
}
