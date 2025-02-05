import MovieDetails from "@/classes/movie-details";
import MovieOverview from "@/classes/movie-overview";
import formatMinutes from "@/utils/format-minutes";
import { twMerge } from "tailwind-merge";
import Rating from "./Rating";

type MovieDataProps = {
  className?: string
  movie: MovieDetails | MovieOverview
}

export default function MovieData({ className, movie }: MovieDataProps) {
  return (
    <ul className={twMerge("flex w-max justify-between gap-4 items-baseline", className)}>
      <li>
        {movie.year}
      </li>
      <li>
        {formatMinutes(movie.runtime)}
      </li>
      <li>
        <Rating value={movie.rating} />
      </li>
    </ul>
  )
}
