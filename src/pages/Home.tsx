import Hero from "@/components/Hero";
import FeaturedMovie from "@/components/FeaturedMovie";
import useMovieOverviewList from "@/hooks/use-movie-overview-list";
import { useEffect } from "react";
import { IMDbMovieListEndpoint } from "@/enums/imdb/imdb-movie-list-endpoint";
import MovieCarousel from "@/components/MovieCarousel";
import HeroLoading from "@/components/Loading/HeroLoading";
import ContentSection from "@/components/ContentSection";

export default function HomePage() {
  const inTheatersMovieList = useMovieOverviewList(IMDbMovieListEndpoint.InTheaters)
  const topRatedMovieList = useMovieOverviewList(IMDbMovieListEndpoint.TopRated)
  const popularMovieList = useMovieOverviewList(IMDbMovieListEndpoint.Popular)

  useEffect(() => {
    document.title = 'FlixVault: seus filmes favoritos!'
  }, [])

  return (
    <div className="flex flex-col gap-12">
      {inTheatersMovieList.data && (inTheatersMovieList.data.length > 0) ? (
        <Hero movie={inTheatersMovieList.data[0]} />
      ) : (
        <HeroLoading />
      )}

      <ContentSection>
        <h3 className="h3">
          Nos cinemas
        </h3>

        <MovieCarousel movieList={inTheatersMovieList.data?.slice(2)} />
      </ContentSection>

      {inTheatersMovieList.data && (inTheatersMovieList.data.length > 1) && (
        <FeaturedMovie movie={inTheatersMovieList.data[1]} />
      )}

      <ContentSection>
        <h3 className="h3">
          Mais bem avaliados
        </h3>

        <MovieCarousel movieList={topRatedMovieList.data} />
      </ContentSection>

      <ContentSection>
        <h3 className="h3">
          Popular
        </h3>

        <MovieCarousel movieList={popularMovieList.data} />
      </ContentSection>
    </div>
  )
}
