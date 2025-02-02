import { LuStar } from "react-icons/lu";

interface RatingProps {
  value: number
}

export default function Rating({ value }: RatingProps) {
  return (
    <div title="Avaliação" className="flex items-baseline gap-1">
      <LuStar className="text-yellow-500 size-5 translate-y-0.5" />
      <div>
        <span className="text-lg">
          {value ? value.toFixed(1) : '-'}
        </span>
        <span>/10</span>
      </div>
    </div>
  )
}