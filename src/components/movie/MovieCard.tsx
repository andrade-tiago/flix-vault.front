import MovieData from "./MovieData"
import PlayButton from "./PlayButton"
import MovieDataProps from "../../interfaces/movie-data-props"

interface MovieCardProps extends MovieDataProps {
  title: string
  description: string
  imgPath: string
}

export default function MovieCard(props: MovieCardProps) {
  const imgURL = 'https://image.tmdb.org/t/p/w300' + props.imgPath // '/img.jpg'
  const titleLengthLimit = 15

  return (
    <div className="w-44 hover:-translate-y-1 focus-within:-translate-y-1 transition-transform duration-200 flex flex-col gap-1 text-gray-400">
      <div className="h-64 rounded-xl overflow-hidden relative">
        {/* background-image */} <img
          src={imgURL} alt="Banner do filme"
          className="absolute w-full h-full object-cover -z-10 top-0 left-0"
        />

        <div className="w-full h-full p-3 bg-gray-950/70 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity focus-within:opacity-100 flex flex-col justify-between items-center">
          <p className="w-full text-gray-100">{props.description.substring(0, 100)}...</p>

          <PlayButton />
        </div>
      </div>

      <h3 className="font-medium w-full" title={props.title}>
        {props.title.substring(0, titleLengthLimit)}
        {props.title.length > titleLengthLimit && '...'}
      </h3>

      <MovieData year={props.year} duration={props.duration} rating={props.rating} />
    </div>
  )
}
