import { LuChevronLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      title="Voltar"
      className="border rounded-3xl border-gray-400 p-2 w-min"
    >
      <LuChevronLeft />
    </button>
  )
}
