import getMovieDetails from "../services/get-movie-details";
import { useQuery } from "react-query";

export default function useMovieDetails(
  id: number,
) {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: async () => await getMovieDetails(id)
  })
}
