import { Play } from "lucide-react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface PlayButtonProps {
  movieId: number
  className?: string
}

export default function PlayButton({ movieId, className }: PlayButtonProps) {
  return (
    <Link
      to={`/movies/${movieId}`}
      title="Assistir a este filme"
      className={twMerge(
        `bg-amber-500 text-amber-950
        py-3 rounded-3xl gap-3 flex justify-between
        px-6 items-center uppercase tracking-widest
        text-sm font-medium shadow-2xl outline-none
        focus:outline-dashed focus:outline-1
        focus:outline-gray-300 w-min`,
        className
      )}
    >
      <Play className="size-4" />
      Assistir
    </Link>
  )
}