import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import FeaturedMovie from "../components/movie/FeaturedMovie";
import { movieAPI } from  "../services/movie-api"
import { Movie, MovieList } from "../interfaces/movies-api/movie-list";
import MovieListSection from "../components/MovieListSection";

export function Home() {
  const [releases, setReleases] = useState<Movie[]>([])

  useEffect(() => {
    movieAPI.get('movie/now_playing', {
      params: {
        language: 'pt',
        page: 1,
      },
    })
      .then(json => json.data)
      .then((data: MovieList) => {
        setReleases(data.results)
      })
  }, [])

  return (
    <div className="flex flex-col gap-2">
      <Hero />

      <MovieListSection title="Lançamentos" movieList={releases} />

      <FeaturedMovie />
    </div>
  )
}
