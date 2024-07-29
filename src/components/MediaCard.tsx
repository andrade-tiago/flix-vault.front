import { twMerge } from "tailwind-merge"
import PlayButton from "./PlayButton"
import Rating from "./Rating"
import MediaOverview from "@/models/media-overview"
import SeriesOverview from "@/models/series-overview"
import MovieOverview from "@/models/movie-overview"
import { MediaData } from "./MediaData"
import formatMinutes from "@/utils/format-minutes"

interface CardProps {
  media: MediaOverview
}

export default function MediaCard({ media }: CardProps) {
  return (
    <div
      className="group w-44 hover:-translate-y-1 focus-within:-translate-y-1
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
          className="w-full h-full p-3 bg-gray-950/70 backdrop-blur-xl
          opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100
          flex flex-col justify-between items-center gap-2"
        >
          <p
            className={twMerge(
              'line-clamp-[7]',
              media.overview ? 'text-gray-100' : 'text-gray-400',
            )}
          >
            {media.overview || 'Sinopse indisponível'}
          </p>

          <PlayButton mediaType={media.mediaType} mediaId={media.id} />
        </div>
      </div>

      <h3 className="font-medium w-full truncate" title={media.title}>
        {media.title}
      </h3>

      <MediaData.Root className="w-full text-sm">
        {media instanceof MovieOverview && (
          <>
            <MediaData.Item>{media.year}</MediaData.Item>
            <MediaData.Item>
              {formatMinutes(media.runtime)}
            </MediaData.Item>
          </>
        )}
        {media instanceof SeriesOverview && (
          <>
            <MediaData.Item>{media.lastAirDate.getFullYear()}</MediaData.Item>
            <MediaData.Item>{media.seasons} T</MediaData.Item>
          </>
        )}

        <MediaData.Item><Rating value={media.rating} /></MediaData.Item>
      </MediaData.Root>
    </div>
  )
}
