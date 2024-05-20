import { useEffect, useState } from "react";
import { IMDbMovieListEndpoint } from "../enums/imdb-movie-list-endpoint";
import getMovieOverviewList from "../services/get-movie-overview-list";
import MovieOverview from "../interfaces/movie-overview";

export default function useMovieOverviewList(
  listName: IMDbMovieListEndpoint,
  pageNumber = 1
) {
  const [data, setData] = useState<MovieOverview[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function task() {
      try {
        const movieOverviewList = await getMovieOverviewList(listName, pageNumber)

        setData(movieOverviewList)
      } catch {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    task()
  }, [])

  return {
    data,
    isLoading,
    error,
  }
}