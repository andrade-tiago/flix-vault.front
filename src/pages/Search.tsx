import MediaCard from "@/components/MediaCard"
import useSearchMovie from "@/hooks/use-search-movie"
import React from "react"
import { useLocation } from "react-router-dom"

const SearchPage: React.FunctionComponent = () => {
  const { search: params } = useLocation()

  const [pageNumber] = React.useState<number>(1)
  const search = new URLSearchParams(params).get('query') || ''

  const { data: movies } = useSearchMovie({
    query: search,
    pageNumber,
  })

  return (
    <div>
      <div className="flex gap-4 justify-center flex-wrap mt-40">
        {movies ? movies.map(movie => (
          <MediaCard media={movie} key={movie.id} />
        )) : Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-44 h-64 mb-20 rounded-xl bg-gray-600 animate-pulse"
          />
        ))}
      </div>
    </div>
  )
}

export default SearchPage
