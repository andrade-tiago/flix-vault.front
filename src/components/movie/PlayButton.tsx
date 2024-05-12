import { Play } from "lucide-react"

export default function PlayButton() {
  return (
    <button
      title="Assistir a este filme"
      className="bg-amber-500 text-amber-950
        py-3 rounded-3xl gap-3 flex justify-between
        px-6 items-center uppercase tracking-widest
        text-sm font-medium shadow-2xl shadow-amber-500"
    >
      <Play className="size-4" />
      <span>Assistir</span>
    </button>
  )
}