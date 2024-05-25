import { useParams } from "react-router-dom"
import GenreList from "../components/GenreList"
import MovieData from "../components/movie/MovieData"
import useMovieDetails from "../hooks/use-movie-details"
import MovieListSection from "../components/MovieListSection"
import BackButton from "../components/BackButton"
import useMovieRecommendationsList from "../hooks/use-movie-recommendations-list"

type RouteParams = {
  id: string
}

export default function Movie() {
  const params = useParams<RouteParams>()
  const id = Number(params.id)

  const { data: movie } = useMovieDetails(id)
  const { data: movieRecommendations } = useMovieRecommendationsList(id)

  if (!movie) {
    return "Carregando..."
  }

  const productionCompanies = 
    movie.productionCompanies.length > 0
    ? movie.productionCompanies.map(comp => comp.name).join(', ').concat('.')
    : 'N/A'

  return (
    <div>
      <div className="relative bg-gradient-to-t from-gray-950 pt-40 pb-16 min-h-screen px-3">
        {movie.backdropPath && (
          <img
            src={movie.backdropPath} alt=""
            className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-30"
          />
        )}

        <div className="flex flex-col gap-10 mx-auto max-w-2xl lg:max-w-6xl">
          <BackButton />

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="flex flex-col items-center md:order-2 w-full">
              {movie.posterPath && (
                <img
                  src={movie.posterPath}
                  alt=""
                  className="min-w-60 rounded-lg shadow-lg shadow-gray-800 border border-gray-400/20"
                />
              )}
            </div>

            <div className="flex flex-col gap-5 max-w-2xl">
              <MovieData
                duration={movie.runtime}
                rating={movie.rating}
                year={movie.year}
              />

              <p className="uppercase tracking-widest font-medium -mb-4 text-sm">
                Assistir a
              </p>

              <h1 className="font-medium text-4xl">
                {movie.title}
              </h1>

              <p className="text-gray-300 md:text-justify">
                {movie.overview}
              </p>

              <GenreList genres={movie.genres} />

              <ul className="list-disc pl-6">
                <li>
                  Título original ({movie.originalLanguage}): {movie.originalTitle}
                </li>
                <li>
                  Produtores: {productionCompanies}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {movieRecommendations && (
        <MovieListSection title="Com base neste" movieList={movieRecommendations} />
      )}
    </div>
  )
}
