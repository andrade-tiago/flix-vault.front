import { Star } from "lucide-react";

interface RatingProps {
  rating: number
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div title="Avaliação" className="flex items-baseline gap-1">
      <Star className="text-yellow-500 size-5 translate-y-0.5" />
      <div>
        <span className="text-lg">
          {rating ? rating.toFixed(1) : '-'}
        </span>
        <span>/10</span>
      </div>
    </div>
  )
}