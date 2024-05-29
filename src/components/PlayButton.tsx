import { Play } from "lucide-react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { MediaType } from "@/interfaces/media-overview"

interface PlayButtonProps {
  mediaType: MediaType
  mediaId: number
  className?: string
}

export default function PlayButton({ mediaId, mediaType, className }: PlayButtonProps) {
  return (
    <Link
      to={`/${mediaType}/${mediaId}`}
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
      <span>Assistir</span>
    </Link>
  )
}