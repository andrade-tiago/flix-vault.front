import MovieOverview from "@/models/movie-overview"
import Carousel from "./Carousel"
import MediaCard from "./MediaCard"
import SeriesOverview from "@/models/series-overview"

interface MediaListSectionProps {
  title: string
  mediaList: (MovieOverview | SeriesOverview)[]
}

export default function MediaListSection({ title, mediaList }: MediaListSectionProps) {
  return (
    <section>
      <h3 className="px-3 sm:px-5 md:px-7 xl:px-9 font-medium text-2xl">
        {title}
      </h3>

      <Carousel>
        {mediaList.map((media) => (
          <MediaCard key={media.id} media={media} />
        ))}
      </Carousel>
    </section>
  )
}
