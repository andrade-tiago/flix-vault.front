import { Search } from "lucide-react";
import { useState } from "react";
import { Form, useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('query') || '')

  return (
    <Form
      action="/movies"
      className="
        border-gray-600 border-[1px] rounded-md
        w-full max-w-96 flex items-center gap-1 px-2
        text-gray-400
      "
    >
      <Search />
      <input
        type="text"
        placeholder="Buscar filme..."
        className="p-2 flex-1 bg-transparent text-gray-400 outline-none"
        name="query"
        value={search}
        onChange={event => setSearch(event.target.value)}
        required
      />
    </Form>
  )
}