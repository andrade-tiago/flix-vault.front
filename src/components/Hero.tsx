import PlayButton from "@/components/PlayButton"
import MovieOverview from "@/classes/movie-overview"
import { useMediaBackdropImgURL, useMediaTitleImgURL } from "@/hooks/use-images"
import { BackdropSizes, TitleSizes } from "@/services/imdb-api/imdb-images"
import { LuChevronDown } from "react-icons/lu"
import MovieData from "./MovieData"
import { motion } from "framer-motion"
import MovieTitleImg from "./MovieTitleImg"

interface HeroProps {
  movie: MovieOverview
}

export default function Hero({ movie }: HeroProps) {
  const { data: movieBackdropImgURL } = useMediaBackdropImgURL({
    movieId: movie.id,
    languages: [null],
    size: BackdropSizes.Original,
    allowRandomImgIfNotFound: false,
  })
  const { data: movieTitleImgURL} = useMediaTitleImgURL({
    movieId: movie.id,
    languages: ['pt', 'en'],
    size: TitleSizes.W500,
    allowRandomImgIfNotFound: true,
  })

  return (
    <motion.div
      className="relative pt-28 pb-20 min-h-[650px] bg-gradient-to-t from-gray-950 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {movieBackdropImgURL && (
        <motion.img
          src={movieBackdropImgURL}
          alt=""
          className="absolute w-full h-full object-cover -z-10 top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: .2 }}
          transition={{ delay: 1 }}
        />
      )}

      {movieTitleImgURL !== undefined && (
        <div className="max-w-2xl mx-auto flex items-center gap-5 flex-col">
          <h3 className="font-medium text-5xl text-center">
            {movieTitleImgURL ? (
              <MovieTitleImg
                imgURL={movieTitleImgURL}
                movieTitle={movie.title}
              />
            ) : movie.title}
          </h3>

          <MovieData movie={movie} />

          <h4 className="font-medium uppercase tracking-widest text-sm -mb-4">
            Sinopse
          </h4>
          <p className="text-center text-gray-300">
            {movie.overview}
          </p>

          <PlayButton movieId={movie.id} light />

          <LuChevronDown className="mt-5" />
        </div>
      )}
    </motion.div>
  )
}
