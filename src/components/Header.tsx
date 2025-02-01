import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Home } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full absolute left-0 top-0 z-50 px-3 md:px-6 py-4 flex justify-center">
      <nav>
        <ul className="flex gap-4 px-4 h-full items-center">
          <li title="Home">
            <Link
              to="/"
              className="border-b-2 border-gray-400 p-2 block"
            >
              <Home />
            </Link>
          </li>
        </ul>
      </nav>

      <SearchBar />
    </header>
  )
}
