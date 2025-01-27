import Hero from "@/components/Hero";
import MediaListSection from "@/components/MediaListSection";
import FeaturedMovie from "@/components/FeaturedMovie";
import useMovieOverviewList from "@/hooks/use-movie-overview-list";
import { useEffect } from "react";
import { IMDbMovieListEndpoint } from "@/enums/imdb/imdb-movie-list-endpoint";

export default function HomePage() {
  const movies = {
    inTheaters: useMovieOverviewList(IMDbMovieListEndpoint.InTheaters),
    popular: useMovieOverviewList(IMDbMovieListEndpoint.Popular),
  }

  useEffect(() => {
    document.title = 'FlixVault: seus filmes e séries favoritos'
  }, [])

  return (
    <div className="flex flex-col gap-6">
      {movies.inTheaters.data && movies.inTheaters.data.length > 0 && (
        <>
          <Hero movie={movies.inTheaters.data[0]} />

          {movies.inTheaters.data.length > 1 && (
            <MediaListSection title="Nos cinemas" mediaList={movies.inTheaters.data.slice(2)} />
          )}

          <FeaturedMovie movie={movies.inTheaters.data[1]} />
        </>
      )}

      {movies.popular.data && movies.popular.data.length > 0 && (
        <MediaListSection title="Filmes em alta" mediaList={movies.popular.data} />
      )}
    </div>
  )
}
