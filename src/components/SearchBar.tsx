import { useRef, useState } from "react";
import { IoIosClose, IoMdSearch } from "react-icons/io";
import { Form, useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams] = useSearchParams()
  const searchInput = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState(searchParams.get('query') || "")

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setSearch(event.target.value)
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    if (!search.trim()) {
      event.preventDefault()
    }
  }
  const handleReset: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    setSearch("")
    searchInput.current?.focus()
  }

  return (
    <Form
      action="/movies"
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="
        border-gray-600 border-[1px] rounded-md
        w-full max-w-96 flex items-center gap-1 px-2
        text-gray-400
      "
    >
      <IoMdSearch className="text-2xl" />
      <input ref={searchInput}
        type="text"
        placeholder="Buscar filme..."
        className="p-2 flex-1 bg-transparent text-gray-400 outline-none"
        name="query"
        value={search}
        onChange={handleInputChange}
      />
      {search && (
        <button type="reset">
          <IoIosClose className="text-2xl" />
        </button>
      )}
    </Form>
  )
}