import Rating from "../Rating";

interface MovieDataProps {
  year: number
  runtime: number
  rating: number
}

export default function MovieData({ year, runtime, rating }: MovieDataProps) {
  return (
    <div className="flex items-baseline w-full max-w-48 justify-between">
      <span title="Ano de lançamento">{year}</span>

      <span title="Duração">
        {runtime ? (
          `${runtime} min`
        ) : (
          'N/A'
        )}
      </span>

      <Rating rating={rating} />
    </div>
  )
}
