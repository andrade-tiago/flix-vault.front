import { FaPlay } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface PlayButtonProps {
  movieId: number
  light?: boolean
}

export default function PlayButton(props: PlayButtonProps) {
  return (
    <Link
      to={`/movies/${props.movieId}`}
      title="Assistir a este filme"
      className={twMerge(
        `bg-amber-500 text-amber-950
        py-3 rounded-3xl gap-3 flex justify-between
        px-6 items-center uppercase tracking-widest
        text-sm font-medium shadow-2xl outline-none
        focus:outline-dashed focus:outline-1
        focus:outline-gray-300 w-min`,
        props.light ? "shadow-amber-500" : null,
      )}
    >
      <FaPlay className="size-4" />
      Assistir
    </Link>
  )
}