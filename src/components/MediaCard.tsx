import { twMerge } from "tailwind-merge"
import PlayButton from "./PlayButton"
import truncateText from "@/utils/truncate-text"
import Rating from "./Rating"
import MediaOverview from "@/models/media-overview"
import SeriesOverview from "@/models/series-overview"
import MovieOverview from "@/models/movie-overview"
import { MediaData } from "./MediaData"

interface CardProps {
  media: MediaOverview
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

      <MediaData.Root className="w-full text-sm">
        {media instanceof MovieOverview && (
          <>
            <MediaData.Item>{media.year}</MediaData.Item>
            <MediaData.Item>{media.runtime} min</MediaData.Item>
          </>
        )}
        {media instanceof SeriesOverview && (
          <>
            <MediaData.Item>{media.episodes} Eps.</MediaData.Item>
          </>
        )}

        <MediaData.Item><Rating value={media.rating} /></MediaData.Item>
      </MediaData.Root>
    </div>
  )
}
