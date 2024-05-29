import Hero from "@/components/Hero";
import MediaListSection from "@/components/MovieListSection";
import FeaturedMovie from "@/components/FeaturedMovie";
import useMovieOverviewList from "@/hooks/use-movie-overview-list";
import { IMDbMovieListEndpoint } from "@/services/imdb-api/get-imdb-movie-list";
import { IMDbTVSeriesListEndpoint } from "@/services/imdb-api/get-imdb-tv-list";
import useSeriesOverviewList from "@/hooks/use-series-overview-list";

export default function Home() {
  const movies = {
    inTheaters: useMovieOverviewList(IMDbMovieListEndpoint.InTheaters),
    popular: useMovieOverviewList(IMDbMovieListEndpoint.Popular),
  }
  const series = {
    airingToday: useSeriesOverviewList(IMDbTVSeriesListEndpoint.AiringToday),
    onTheAir: useSeriesOverviewList(IMDbTVSeriesListEndpoint.OnTheAir),
  }

  return (
    <div className="flex flex-col gap-6">
      {movies.inTheaters.data && movies.inTheaters.data.length > 0 && (
        <>
          <Hero movie={movies.inTheaters.data[0]} />

          {movies.inTheaters.data.length > 1 && (
            <MediaListSection title="Nos cinemas" mediaList={movies.inTheaters.data.slice(1)} />
          )}
        </>
      )}

      {movies.popular.data && movies.popular.data.length > 0 && (
        <>
          <FeaturedMovie movie={movies.popular.data[0]} />

          {movies.popular.data.length > 1 && (
            <MediaListSection title="Filmes em alta" mediaList={movies.popular.data.slice(1)} />
          )}
        </>
      )}

      {series.airingToday.data && series.airingToday.data.length > 0 && (
        <MediaListSection title="Atualização de séries" mediaList={series.airingToday.data} />
      )}

      {series.onTheAir.data && series.onTheAir.data.length > 0 && (
        <MediaListSection title="Séries em alta" mediaList={series.onTheAir.data} />
      )}
    </div>
  )
}
