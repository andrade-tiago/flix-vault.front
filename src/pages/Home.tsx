import Hero from "@/components/Hero";
import FeaturedMovie from "@/components/FeaturedMovie";
import useMovieOverviewList from "@/hooks/use-movie-overview-list";
import { useEffect } from "react";
import { IMDbMovieListEndpoint } from "@/enums/imdb/imdb-movie-list-endpoint";
import Carousel from "@/components/Carousel";
import MovieCardLoading from "@/components/Loading/MovieCardLoading";
import MovieCard from "@/components/MovieCard";

export default function HomePage() {
  const movieLists = [
    useMovieOverviewList(IMDbMovieListEndpoint.Popular, 1),
    useMovieOverviewList(IMDbMovieListEndpoint.Popular, 2),
    useMovieOverviewList(IMDbMovieListEndpoint.Popular, 3),
  ]

  const movieListSectionClasses = "px-3 sm:px-5 md:px-7 xl:px-9 flex flex-col gap-2"
  const tenPositionsEmptyArray = Array.from({ length: 10 })

  useEffect(() => {
    document.title = 'FlixVault: seus filmes favoritos!'
  }, [])

  return (
    <div className="flex flex-col gap-12">
      {movieLists[0].isLoading || movieLists[0].error ? (
        <div className="h-[600px] w-full bg-gray-900 animate-pulse" />
      ) : movieLists[0].data && (movieLists[0].data.length > 0) && (
        <Hero movie={movieLists[0].data[0]} />
      )}

      <section className={movieListSectionClasses}>
        <h3 className="h3">
          Nos cinemas
        </h3>

        <Carousel>
          {movieLists[0].isLoading || movieLists[0].error ? (
            tenPositionsEmptyArray.map((_, i) => (
              <MovieCardLoading key={i} />
            ))
          ) : movieLists[0].data && (movieLists[0].data.length > 2) && (
            movieLists[0].data.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))
          )}
        </Carousel>
      </section>

      {movieLists[0].data && (movieLists[0].data.length > 1) && (
        <FeaturedMovie movie={movieLists[0].data[1]} />
      )}

      <section className={movieListSectionClasses}>
        <h3 className="h3">
          Em alta
        </h3>

        <Carousel>
          {movieLists[1].isLoading || movieLists[1].error ? (
            tenPositionsEmptyArray.map((_, i) => (
              <MovieCardLoading key={i} />
            ))
          ) : movieLists[1].data && (movieLists[1].data.length > 0) && (
            movieLists[1].data.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))
          )}
        </Carousel>
      </section>

      <section className={movieListSectionClasses}>
        <h3 className="h3">
          Escolha do editor
        </h3>

        <Carousel>
          {movieLists[2].isLoading || movieLists[2].error ? (
            tenPositionsEmptyArray.map((_, i) => (
              <MovieCardLoading key={i} />
            ))
          ) : movieLists[2].data && (movieLists[2].data.length > 0) && (
            movieLists[2].data.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))
          )}
        </Carousel>
      </section>
    </div>
  )
}
