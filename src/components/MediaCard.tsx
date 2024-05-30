import { twMerge } from "tailwind-merge"
import PlayButton from "./PlayButton"
import truncateText from "@/utils/truncate-text"
import Rating from "./Rating"
import SeriesOverview from "@/models/series-overview"
import MovieOverview from "@/models/movie-overview"

interface CardProps {
  media: SeriesOverview | MovieOverview
}

export default function MediaCard({ media }: CardProps) {
  return (
    <div
      className="w-44 hover:-translate-y-1 focus-within:-translate-y-1
      transition-transform duration-200 flex flex-col gap-1 text-gray-400"
    >
      <div className="h-64 rounded-xl overflow-hidden relative">
        {media.posterURL && (
          <img
            src={media.posterURL} alt=""
            className="absolute w-full h-full object-cover -z-10 top-0 left-0"
          />
        )}

        <div
          className="w-full h-full p-3 bg-gray-950/70 backdrop-blur-sm
          opacity-0 hover:opacity-100 transition-opacity focus-within:opacity-100
          flex flex-col justify-between items-center"
        >
          <p className={twMerge('w-full', media.overview ? 'text-gray-100' : 'text-gray-400')}>
            {media.overview ? truncateText(media.overview, 100) : 'Sinopse indisponível'}
          </p>

          <PlayButton mediaType={media.mediaType} mediaId={media.id} />
        </div>
      </div>

      <h3 className="font-medium w-full" title={media.title}>
        {truncateText(media.title, 20)}
      </h3>

      <ul className="flex justify-between gap-2">
        {media instanceof MovieOverview && (
          <>
            <li>{media.year}</li>
            <li>{media.runtime} min</li>
          </>
        )}
        {media instanceof SeriesOverview && (
          <>
            <li title="Temporadas">{media.seasons} Ts</li>
            <li title="Episódios">{media.episodes} Eps</li>
          </>
        )}

        <li><Rating value={media.rating} /></li>
      </ul>
    </div>
  )
}
