import { useParams } from "react-router-dom"
import GenreList from "@/components/GenreList"
import useMovieDetails from "@/hooks/use-movie-details"
import BackButton from "@/components/BackButton"
import useMovieRecommendationsList from "@/hooks/use-movie-recommendations-list"
import MovieData from "@/components/MovieData"
import { useEffect, useMemo } from "react"
import { useMediaBackdropImgURL, useMediaPosterImgURL, useMediaTitleImgURL } from "@/hooks/use-images"
import { BackdropSizes, PosterSizes, TitleSizes } from "@/services/imdb-api/imdb-images"
import MoviePosterLoading from "@/components/Loading/MoviePosterLoading"
import MovieCarousel from "@/components/MovieCarousel"
import ContentSection from "@/components/ContentSection"
import { motion } from "framer-motion"
import MovieDataLoading from "@/components/Loading/MovieDataLoading"
import ContentLoading from "@/components/Loading/ContentLoading"
import MoviePoster from "@/components/MoviePoster"
import MovieTitleImg from "@/components/MovieTitleImg"

type RouteParams = { id: string }

export default function MoviePage() {
  const params = useParams<RouteParams>()
  const movieID = Number(params.id)

  const { data: movie } = useMovieDetails(movieID)

  const productionCompanies = useMemo(() => (
    movie && (movie.productionCompanies.length > 0)
      ? movie.productionCompanies.join(', ').concat('.')
      : "(indisponível)"
  ), [movie])

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
    const stateText = movie
      ? `assistir a "${movie.title}"`
      : "Carregando..."

    document.title = `FlixVault: ${stateText}"`

    window.scroll({ top: 0, behavior: 'smooth' })
  }, [movie])

  return (
    <div>
      <div className="relative bg-gradient-to-t from-gray-950 pt-24 pb-16 min-h-screen px-3 md:px-6">
        {movieBackdropImgURL && (
          <motion.img
            src={movieBackdropImgURL}
            className="absolute w-full h-full object-cover -z-10 top-0 left-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: .2 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
          />
        )}

        <div className="flex flex-col gap-10 mx-auto max-w-2xl sm:max-w-6xl">
          <BackButton />

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="flex flex-col items-center">
              {moviePosterImgURL ? (
                <MoviePoster imgURL={moviePosterImgURL} />
              ) : (
                <MoviePosterLoading />
              )}
            </div>

            <div className="flex flex-col gap-5 max-w-2xl w-full">
              {movie ? (
                <>
                  <MovieData movie={movie} />

                  <p className="uppercase tracking-widest font-medium text-sm">
                    Assistir a
                  </p>

                  <h1 className="font-medium text-4xl">
                    {movieTitleImgURL ? (
                      <MovieTitleImg
                        imgURL={movieTitleImgURL}
                        movieTitle={movie.title}
                      />
                    ) : (
                      movie.title
                    )}
                  </h1>

                  <p className="text-gray-300 md:text-justify">
                    {movie.overview || "Sinopse indisponível"}
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
                </>
              ) : (
                <>
                  <MovieDataLoading />

                  <ContentLoading className="w-12" />
                  <ContentLoading className="w-3/5 h-20" />

                  <div className="flex flex-col gap-2">
                    <ContentLoading className="w-3/4" />
                    <ContentLoading className="w-4/5" />
                    <ContentLoading className="w-2/5" />
                    <ContentLoading className="w-1/2" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <ContentLoading className="w-2/5" />
                    <ContentLoading className="w-1/2" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <ContentSection>
        <h3 className="h3">
          Com base neste
        </h3>

        <MovieCarousel movieList={movieRecommendations} />
      </ContentSection>
    </div>
  )
}
