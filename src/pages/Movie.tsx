import { useParams } from "react-router-dom"
import GenreList from "../components/GenreList"
import MovieData from "../components/MovieData"
import useMovieDetails from "../hooks/use-movie-details"
import MediaListSection from "../components/MovieListSection"
import BackButton from "../components/BackButton"
import useMovieRecommendationsList from "../hooks/use-movie-recommendations-list"
import useMovieImages from "../hooks/use-movie-images"

type RouteParams = {
  id: string
}

export default function Movie() {
  const params = useParams<RouteParams>()
  const id = Number(params.id)

  const { data: movie } = useMovieDetails(id)
  const { data: movieRecommendations } = useMovieRecommendationsList(id)
  const { data: movieImages } = useMovieImages(id)

  if (!movie) {
    return "Carregando..."
  }

  const productionCompanies = 
    movie.productionCompanies.length > 0
    ? movie.productionCompanies.map(comp => comp.name).join(', ').concat('.')
    : '(indisponível)'

  return (
    <div>
      <div className="relative bg-gradient-to-t from-gray-950 pt-40 pb-16 min-h-screen px-3 md:px-6">
        {movieImages?.backdropImgPath && (
          <img
            src={movieImages.backdropImgPath} alt=""
            className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-30"
          />
        )}

        <div className="flex flex-col gap-10 mx-auto max-w-2xl sm:max-w-6xl">
          <BackButton />

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="flex flex-col items-center md:order-2 w-full max-w-sm">
              {movieImages?.posterImgPath && (
                <img
                  src={movieImages.posterImgPath}
                  alt=""
                  className="min-w-60 max-w-60 rounded-lg shadow-lg shadow-gray-800 border border-gray-400/20"
                />
              )}
            </div>

            <div className="flex flex-col gap-5 max-w-2xl w-full">
              <MovieData
                runtime={movie.runtime}
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
                {movie.overview || 'Sinopse indisponível'}
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

      {movieRecommendations && movieRecommendations.length > 0 && (
        <MediaListSection title="Com base neste" mediaList={movieRecommendations} />
      )}
    </div>
  )
}
