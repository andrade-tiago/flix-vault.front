import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "/Logo.png"

export default function Header() {
  return (
    <header
      className="
        w-full absolute left-0 top-0 z-50 px-3 md:px-6 py-4
        flex justify-center items-end gap-6
      "
    >
      <Link to="/" title="Home">
        <img
          src={logo}
          className="h-12"
        />
      </Link>

      <SearchBar />
    </header>
  )
}
