import { useParams } from "react-router-dom"
import GenreList from "@/components/GenreList"
import useMovieDetails from "@/hooks/use-movie-details"
import MediaListSection from "@/components/MediaListSection"
import BackButton from "@/components/BackButton"
import useMovieRecommendationsList from "@/hooks/use-movie-recommendations-list"
import MovieData from "@/components/MovieData"
import { useEffect } from "react"
import { useMediaBackdropImgURL, useMediaPosterImgURL, useMediaTitleImgURL } from "@/hooks/use-images"
import { BackdropSizes, PosterSizes, TitleSizes } from "@/services/imdb-api/imdb-images"
import MoviePosterLoading from "@/components/Loading/MoviePosterLoading"

type RouteParams = { id: string }

export default function MoviePage() {
  const params = useParams<RouteParams>()
  const movieID = Number(params.id)

  const { data: movie } = useMovieDetails(movieID)

  const { data: movieBackdropImgURL } = useMediaBackdropImgURL({
    movieId: movieID,
    languages: [null],
    size: BackdropSizes.Original,
    allowRandomImgIfNotFound: false,
  })
  const { data: moviePosterImgURL } = useMediaPosterImgURL({
    movieId: movieID,
    languages: ['pt', 'en'],
    size: PosterSizes.W500,
    allowRandomImgIfNotFound: true,
  })
  const { data: movieTitleImgURL } = useMediaTitleImgURL({
    movieId: movieID,
    languages: ['pt'],
    size: TitleSizes.W500,
    allowRandomImgIfNotFound: false,
  })

  const { data: movieRecommendations } = useMovieRecommendationsList(movieID)

  useEffect(() => {
    document.title = `FlixVault: assistir a "${movie?.title}"`
  }, [movie])

  if (!movie) {
    return "Carregando..."
  }

  const productionCompanies = 
    movie.productionCompanies.length > 0
    ? movie.productionCompanies.join(', ').concat('.')
    : '(indisponível)'

  return (
    <div>
      <div className="relative bg-gradient-to-t from-gray-950 pt-40 pb-16 min-h-screen px-3 md:px-6">
        {movieBackdropImgURL && (
          <img
            src={movieBackdropImgURL} alt=""
            className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-20"
          />
        )}

        <div className="flex flex-col gap-10 mx-auto max-w-2xl sm:max-w-6xl">
          <BackButton />

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            {moviePosterImgURL ? (
              <div className="flex flex-col items-center">
                <img
                  src={moviePosterImgURL}
                  alt=""
                  className="min-w-60 max-w-60 rounded-lg shadow-lg"
                />
              </div>
            ) : (
              <MoviePosterLoading />
            )}

            <div className="flex flex-col gap-5 max-w-2xl w-full">
              <MovieData movie={movie} />

              <p className="uppercase tracking-widest font-medium text-sm">
                Assistir a
              </p>

              <h1 className="font-medium text-4xl">
                {movieTitleImgURL ? (
                  <img
                    src={movieTitleImgURL}
                    alt={movie.title}
                    title={movie.title}
                    className="max-w-full max-h-32 mx-auto shadow-zinc-500 drop-shadow-[0_0_1px_#fff9]"
                  />
                ): movie.title}
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
