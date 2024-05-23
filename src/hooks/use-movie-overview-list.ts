import { IMDbMovieListEndpoint } from "../enums/imdb-movie-list-endpoint";
import getMovieOverviewList from "../services/get-movie-overview-list";
import { useQuery } from "react-query";

export default function useMovieOverviewList(
  key: unknown[],
  listName: IMDbMovieListEndpoint,
  pageNumber = 1,
) {
  return useQuery({
    queryKey: key,
    queryFn: async () => await getMovieOverviewList(listName, pageNumber),
  })
}
