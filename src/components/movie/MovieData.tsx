import { Star } from "lucide-react";
import MovieDataProps from "../../interfaces/movie-data-props";

export default function MovieData(props: MovieDataProps) {
  return (
    <div className="flex items-baseline w-full max-w-48 justify-between">
      <span title="Ano de lançamento">{props.year}</span>

      <span title="Duração">{props.duration} min</span>

      <div title="Avaliação" className="flex items-baseline gap-1">
        <Star className="text-yellow-500 size-5 translate-y-0.5" />
        <div>
          <span className="text-lg">{props.rating.toFixed(1)}</span>
          <span>/10</span>
        </div>
      </div>
    </div>
  )
}
