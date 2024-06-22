import Hero from "@/components/Hero";
import MediaListSection from "@/components/MediaListSection";
import FeaturedMovie from "@/components/FeaturedMovie";
import useMovieOverviewList from "@/hooks/use-movie-overview-list";
import { IMDbMovieListEndpoint } from "@/services/imdb-api/get-imdb-movie-list";
import { IMDbTVSeriesListEndpoint } from "@/services/imdb-api/get-imdb-tv-list";
import useSeriesOverviewList from "@/hooks/use-series-overview-list";
import { useEffect } from "react";

export default function HomePage() {
  const movies = {
    inTheaters: useMovieOverviewList(IMDbMovieListEndpoint.InTheaters),
    popular: useMovieOverviewList(IMDbMovieListEndpoint.Popular),
  }
  const series = {
    airingToday: useSeriesOverviewList(IMDbTVSeriesListEndpoint.AiringToday),
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

      {series.airingToday.data && series.airingToday.data.length > 0 && (
        <MediaListSection title="Séries" mediaList={series.airingToday.data} />
      )}
    </div>
  )
}
