import { Star } from "lucide-react";

interface MovieDataProps {
  year: number
  runtime: number
  rating: number
}

export default function MovieData({ year, runtime: duration, rating }: MovieDataProps) {
  return (
    <div className="flex items-baseline w-full max-w-48 justify-between">
      <span title="Ano de lançamento">{year}</span>

      <span title="Duração">
        { duration ? (
          `${duration} min`
        ) : (
          'N/A'
        )}
      </span>

      <div title="Avaliação" className="flex items-baseline gap-1">
        <Star className="text-yellow-500 size-5 translate-y-0.5" />
        <div>
          <span className="text-lg">
            {rating ? rating.toFixed(1) : '-'}
          </span>
          <span>/10</span>
        </div>
      </div>
    </div>
  )
}
