import { useEffect, useState } from "react";
import { IMDbMovieListEndpoint } from "../enums/imdb-movie-list-endpoint";
import getMovieOverviewList from "../services/get-movie-overview-list";
import MovieOverview from "../interfaces/movie-overview";

export default function useMovieOverviewList(
  listName: IMDbMovieListEndpoint,
  page = 1
) {
  const [data, setData] = useState<MovieOverview[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getMovieOverviewList(listName, page)
      .then(movieList => {
        setData(movieList)
        setIsLoading(false)
      })
  }, [])

  return {
    data,
    isLoading,
  }
}