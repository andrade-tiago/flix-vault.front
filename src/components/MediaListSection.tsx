import MovieOverview from "@/classes/movie-overview"
import Carousel from "./Carousel"
import MovieCard from "./MovieCard"

interface MovieListSectionProps {
  title: string
  mediaList: MovieOverview[]
}

export default function MediaListSection({ title, mediaList }: MovieListSectionProps) {
  return (
    <section>
      <h3 className="px-3 sm:px-5 md:px-7 xl:px-9 font-medium text-2xl">
        {title}
      </h3>

      <Carousel>
        {mediaList.map((media) => (
          <MovieCard key={media.id} movie={media} />
        ))}
      </Carousel>
    </section>
  )
}
