import { IMDbMovieDetails } from "@/interfaces/imdb-api/imdb-media-details";
import { MediaType, MovieOverview } from "@/interfaces/media-overview";
import { imgBaseURL } from "@/services/imdb-api/imdb-api";

export default function movieOverviewOf(movie: IMDbMovieDetails): MovieOverview {
  let posterPath = movie.poster_path
  if (posterPath) {
    posterPath = imgBaseURL + 'w185' + posterPath
  }

  return {
    mediaType: MediaType.Movie,

    id: movie.id,
    overview: movie.overview,
    posterPath: posterPath,
    rating: movie.vote_average,
    runtime: movie.runtime,
    title: movie.title,
    year: new Date(movie.release_date).getFullYear(),
  }
}
